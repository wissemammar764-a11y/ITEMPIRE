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
    const newPresence = this.presenceRepository.create(createPresenceDto);
    return this.presenceRepository.save(newPresence);
  }

  findAll() {
    return this.presenceRepository.find();
  }

  findOne(id: number) {
    return this.presenceRepository.findOneBy({ id });
  }

  update(id: number, updatePresenceDto: UpdatePresenceDto) {
    return this.presenceRepository.update(id, updatePresenceDto);
  }

  remove(id: number) {
    return this.presenceRepository.delete(id);
  }
}
