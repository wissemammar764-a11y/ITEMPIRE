import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { UpdateInscriptionDto } from './dto/update-inscription.dto';
import { Inscription } from './entities/inscription.entity';

@Injectable()
export class InscriptionService {
  constructor(@InjectRepository(Inscription) private inscriptionRepository: Repository<Inscription>) {}
  create(createInscriptionDto: CreateInscriptionDto) {
    const newInscription = this.inscriptionRepository.create(createInscriptionDto);
    return this.inscriptionRepository.save(newInscription);
  }

  findAll() {
    return `This action returns all inscription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inscription`;
  }

  update(id: number, updateInscriptionDto: UpdateInscriptionDto) {
    return `This action updates a #${id} inscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} inscription`;
  }
}
