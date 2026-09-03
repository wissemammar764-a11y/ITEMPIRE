import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FormationService } from './formation.service';
import { Formation } from './entities/formation.entity';

describe('FormationService', () => {
  let service: FormationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FormationService,
        { provide: getRepositoryToken(Formation), useValue: {} },
      ],
    }).compile();

    service = module.get<FormationService>(FormationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
