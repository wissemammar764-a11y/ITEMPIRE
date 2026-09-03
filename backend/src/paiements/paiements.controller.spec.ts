import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PaiementsController } from './paiements.controller';
import { PaiementsService } from './paiements.service';
import { Paiement } from './entities/paiement.entity';

describe('PaiementsController', () => {
  let controller: PaiementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaiementsController],
      providers: [
        PaiementsService,
        { provide: getRepositoryToken(Paiement), useValue: {} },
      ],
    }).compile();

    controller = module.get<PaiementsController>(PaiementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
