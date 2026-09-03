import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { Trainer } from './entities/trainer.entity';

@Injectable()
export class TrainersService {
  constructor(@InjectRepository(Trainer) private trainerRepository: Repository<Trainer>) {}
  create(createTrainerDto: CreateTrainerDto) {
    const newTrainer = this.trainerRepository.create(createTrainerDto);
    return this.trainerRepository.save(newTrainer);
  }

  findAll() {
    return this.trainerRepository.find();
  }

  findOne(id: number) {
    return this.trainerRepository.findOneBy({ id });
  }

  update(id: number, updateTrainerDto: UpdateTrainerDto) {
    return this.trainerRepository.update(id, updateTrainerDto);
  }

  remove(id: number) {
    return this.trainerRepository.delete(id);
  }
}
