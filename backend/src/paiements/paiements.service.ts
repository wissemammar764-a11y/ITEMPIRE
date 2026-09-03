import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
import { Paiement } from './entities/paiement.entity';

@Injectable()
export class PaiementsService {
  constructor(@InjectRepository(Paiement) private paiementRepository: Repository<Paiement>) {}
  create(createPaiementDto: CreatePaiementDto) {
    const newPaiement = this.paiementRepository.create(createPaiementDto);
    return this.paiementRepository.save(newPaiement);
  }

  findAll() {
    return this.paiementRepository.find();
  }

  findOne(id: number) {
    return this.paiementRepository.findOne({ where: { id } });
  }

  update(id: number, updatePaiementDto: UpdatePaiementDto) {
    return this.paiementRepository.update(id, updatePaiementDto);
  }

  remove(id: number) {
    return this.paiementRepository.delete(id);
  }
}
