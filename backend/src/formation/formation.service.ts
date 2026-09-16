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
    const newFormation = this.formationRepository.create({
      ...createFormationDto,
      status: 'OPEN',
      created_at: new Date(),
    });
    return this.formationRepository.save(newFormation);
  }

  findAll() {
    return this.formationRepository.find({ order: { formation_id: 'ASC' } });
  }

  findOne(id: number) {
    return this.formationRepository.findOneBy({ formation_id: id });
  }

  update(id: number, updateFormationDto: UpdateFormationDto) {
    return this.formationRepository.update({ formation_id: id }, updateFormationDto);
  }

  remove(id: number) {
    return this.formationRepository.delete({ formation_id: id });
  }
}
