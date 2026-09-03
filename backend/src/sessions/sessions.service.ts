import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(@InjectRepository(Session) private sessionRepository: Repository<Session>) { }
  create(createSessionDto: CreateSessionDto) {
    const newSession = this.sessionRepository.create(createSessionDto);
    return this.sessionRepository.save(newSession);
  }

  findAll() {
    return `This action returns all sessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return this.sessionRepository.update(id, {
    mode: updateSessionDto.mode,
  });;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
