import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { InscriptionController } from './inscription.controller';
import { InscriptionService } from './inscription.service';
import { Inscription } from './entities/inscription.entity';

describe('InscriptionController', () => {
  let controller: InscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InscriptionController],
      providers: [
        InscriptionService,
        { provide: getRepositoryToken(Inscription), useValue: {} },
      ],
    }).compile();

    controller = module.get<InscriptionController>(InscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
