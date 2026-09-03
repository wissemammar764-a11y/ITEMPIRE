import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PresencesService } from './presences.service';
import { Presence } from './entities/presence.entity';

describe('PresencesService', () => {
  let service: PresencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PresencesService,
        { provide: getRepositoryToken(Presence), useValue: {} },
      ],
    }).compile();

    service = module.get<PresencesService>(PresencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
