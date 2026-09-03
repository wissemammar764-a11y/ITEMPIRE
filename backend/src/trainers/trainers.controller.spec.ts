import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TrainersController } from './trainers.controller';
import { TrainersService } from './trainers.service';
import { Trainer } from './entities/trainer.entity';

describe('TrainersController', () => {
  let controller: TrainersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainersController],
      providers: [
        TrainersService,
        { provide: getRepositoryToken(Trainer), useValue: {} },
      ],
    }).compile();

    controller = module.get<TrainersController>(TrainersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
