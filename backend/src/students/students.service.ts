import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateStudentAccountDto } from './dto/create-student-account.dto';

import { Student } from './entities/student.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Créer un étudiant seul
  create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);

    return this.studentRepository.save(student);
  }

  // Créer un utilisateur + un étudiant
  async createStudentAccount(data: CreateStudentAccountDto) {

    // Vérifier si l'email existe déjà
    const existingUser = await this.userRepository.findOne({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      throw new Error(
        'Un utilisateur avec cet email existe déjà.',
      );
    }

    // Créer l'utilisateur
    const user = this.userRepository.create({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
    
      role: 'etudiant',
      status: 'active',
      created_at: new Date(),
    });

    // Sauvegarder l'utilisateur
    const savedUser = await this.userRepository.save(user);

    // Créer l'étudiant
    const student = this.studentRepository.create({
      user_id: savedUser.id_user,
      cin: data.cin,
      birth_date: data.birth_date
        ? new Date(data.birth_date)
        : undefined,
      gender: data.gender,
      address: data.address,
      city: data.city,
      country: data.country,
      education_level: data.education_level,
    });

    // Sauvegarder l'étudiant
    const savedStudent =
      await this.studentRepository.save(student);

    return {
      message: 'Étudiant créé avec succès',

      student: savedStudent,

      user: {
        id_user: savedUser.id_user,
        first_name: savedUser.first_name,
        last_name: savedUser.last_name,
        email: savedUser.email,
        phone: savedUser.phone,
        role: savedUser.role,
        status: savedUser.status,
      },
    };
  }

  // Récupérer tous les étudiants
  async findAll() {
    return this.studentRepository.query(`
      SELECT
        s.student_id,
        u.first_name AS prenom,
        u.last_name AS nom,
        u.email,
        u.phone AS telephone,
        s.education_level AS niveau
      FROM students s
      INNER JOIN users u
        ON s.user_id = u.id_user
      ORDER BY s.student_id;
    `);
  }

  // Récupérer un étudiant
  async findOne(id: number) {
    const result = await this.studentRepository.query(
      `
      SELECT
        s.student_id,
        u.first_name AS prenom,
        u.last_name AS nom,
        u.email,
        u.phone AS telephone,
        s.education_level AS niveau
      FROM students s
      INNER JOIN users u
        ON s.user_id = u.id_user
      WHERE s.student_id = $1;
      `,
      [id],
    );

    return result[0] || null;
  }

  // Modifier un étudiant
  update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentRepository.update(
      {
        student_id: id,
      },
      updateStudentDto,
    );
  }

  // Supprimer un étudiant
  remove(id: number) {
    return this.studentRepository.delete({
      student_id: id,
    });
  }
}