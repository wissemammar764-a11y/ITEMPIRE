import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePresenceDto } from './dto/create-presence.dto';
import { UpdatePresenceDto } from './dto/update-presence.dto';
import { Presence } from './entities/presence.entity';

@Injectable()
export class PresencesService {
  constructor(@InjectRepository(Presence) private presenceRepository: Repository<Presence>) {}

  create(createPresenceDto: CreatePresenceDto) {
    const newPresence = this.presenceRepository.create({
      ...createPresenceDto,
      attendance_date: new Date(),
    });
    return this.presenceRepository.save(newPresence);
  }

  // Jointure pour afficher étudiant/formation plutôt que des ID bruts
  findAll() {
    return this.presenceRepository.query(`
      SELECT
        a.attendance_id,
        a.attendance_date,
        a.status,
        u.first_name AS etudiant_prenom,
        u.last_name AS etudiant_nom,
        f.title AS formation_titre
      FROM attendance a
      INNER JOIN enrollments e ON a.enrollment_id = e.enrollment_id
      INNER JOIN students st ON e.student_id = st.student_id
      INNER JOIN users u ON st.user_id = u.user_id
      INNER JOIN sessions s ON e.session_id = s.session_id
      INNER JOIN formations f ON s.formation_id = f.formation_id
      ORDER BY a.attendance_id DESC;
    `);
  }

  findOne(id: number) {
    return this.presenceRepository.findOneBy({ attendance_id: id });
  }

  update(id: number, updatePresenceDto: UpdatePresenceDto) {
    return this.presenceRepository.update({ attendance_id: id }, updatePresenceDto);
  }

  remove(id: number) {
    return this.presenceRepository.delete({ attendance_id: id });
  }
}