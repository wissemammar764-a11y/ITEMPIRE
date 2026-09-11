import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

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
      ON s.user_id = u.user_id
    ORDER BY s.student_id;
  `);
}

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
      ON s.user_id = u.user_id
    WHERE s.student_id = $1;
    `,
    [id],
  );

  return result[0] || null;
}

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentRepository.update(
      { student_id: id },
      updateStudentDto,
    );
  }

  remove(id: number) {
    return this.studentRepository.delete({
      student_id: id,
    });
  }
}