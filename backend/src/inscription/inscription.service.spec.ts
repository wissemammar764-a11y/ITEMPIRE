import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { InscriptionService } from './inscription.service';
import { Inscription } from './entities/inscription.entity';

describe('InscriptionService', () => {
  let service: InscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InscriptionService,
        { provide: getRepositoryToken(Inscription), useValue: {} },
      ],
    }).compile();

    service = module.get<InscriptionService>(InscriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
