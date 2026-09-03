import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PaiementsService } from './paiements.service';
import { Paiement } from './entities/paiement.entity';

describe('PaiementsService', () => {
  let service: PaiementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaiementsService,
        { provide: getRepositoryToken(Paiement), useValue: {} },
      ],
    }).compile();

    service = module.get<PaiementsService>(PaiementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
