import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { UpdateInscriptionDto } from './dto/update-inscription.dto';
import { Inscription } from './entities/inscription.entity';

@Injectable()
export class InscriptionService {
  constructor(@InjectRepository(Inscription) private inscriptionRepository: Repository<Inscription>) {}

  async create(createInscriptionDto: CreateInscriptionDto) {
    // Empêche d'inscrire deux fois le même étudiant à la même session
    const existing = await this.inscriptionRepository.findOne({
      where: {
        student_id: createInscriptionDto.student_id,
        session_id: createInscriptionDto.session_id,
      },
    });

    if (existing) {
      throw new ConflictException('Cet étudiant est déjà inscrit à cette session.');
    }

    const newInscription = this.inscriptionRepository.create({
      ...createInscriptionDto,
      registration_date: new Date(),
      status: 'REGISTERED',
    });
    return this.inscriptionRepository.save(newInscription);
  }

  // Jointure avec students/users et sessions/formations pour des noms lisibles
  findAll() {
    return this.inscriptionRepository.query(`
      SELECT
        e.enrollment_id,
        e.registration_date,
        e.status,
        u.first_name AS etudiant_prenom,
        u.last_name AS etudiant_nom,
        f.title AS formation_titre,
        s.start_date,
        s.end_date
      FROM enrollments e
      INNER JOIN students st ON e.student_id = st.student_id
      INNER JOIN users u ON st.user_id = u.user_id
      INNER JOIN sessions s ON e.session_id = s.session_id
      INNER JOIN formations f ON s.formation_id = f.formation_id
      ORDER BY e.enrollment_id DESC;
    `);
  }

  findOne(id: number) {
    return this.inscriptionRepository.findOneBy({ enrollment_id: id });
  }

  update(id: number, updateInscriptionDto: UpdateInscriptionDto) {
    return this.inscriptionRepository.update({ enrollment_id: id }, updateInscriptionDto);
  }

  remove(id: number) {
    return this.inscriptionRepository.delete({ enrollment_id: id });
  }
}