import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation } from './entities/formation.entity';

@Injectable()
export class FormationService {
  constructor(@InjectRepository(Formation) private formationRepository: Repository<Formation>) {}
  create(createFormationDto: CreateFormationDto) {
    const newFormation = this.formationRepository.create(createFormationDto);
    return this.formationRepository.save(newFormation);
  }

  findAll() {
    return this.formationRepository.find();
  }

  findOne(id: number) {
    return this.formationRepository.findOneBy({ id });
  }

  update(id: number, updateFormationDto: UpdateFormationDto) {
    return this.formationRepository.update({ id }, updateFormationDto);
  }

  remove(id: number) {
    return this.formationRepository.delete({ id });
  }
}
