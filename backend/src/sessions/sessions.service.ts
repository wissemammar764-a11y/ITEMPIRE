import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(@InjectRepository(Session) private sessionRepository: Repository<Session>) {}

  create(createSessionDto: CreateSessionDto) {
    const newSession = this.sessionRepository.create({
      ...createSessionDto,
      status: 'PLANNED',
    });
    return this.sessionRepository.save(newSession);
  }

  // Jointure avec formations et trainers/users pour des noms lisibles
  findAll() {
    return this.sessionRepository.query(`
      SELECT
        s.session_id,
        s.room,
        s.mode,
        s.schedule,
        s.start_date,
        s.end_date,
        s.status,
        f.title AS formation_titre,
        u.first_name AS formateur_prenom,
        u.last_name AS formateur_nom
      FROM sessions s
      INNER JOIN formations f ON s.formation_id = f.formation_id
      INNER JOIN trainers t ON s.trainer_id = t.trainer_id
      INNER JOIN users u ON t.user_id = u.user_id
      ORDER BY s.session_id DESC;
    `);
  }

  findOne(id: number) {
    return this.sessionRepository.findOneBy({ session_id: id });
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return this.sessionRepository.update({ session_id: id }, updateSessionDto);
  }

  remove(id: number) {
    return this.sessionRepository.delete({ session_id: id });
  }
}