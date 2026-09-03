import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PresencesController } from './presences.controller';
import { PresencesService } from './presences.service';
import { Presence } from './entities/presence.entity';

describe('PresencesController', () => {
  let controller: PresencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresencesController],
      providers: [
        PresencesService,
        { provide: getRepositoryToken(Presence), useValue: {} },
      ],
    }).compile();

    controller = module.get<PresencesController>(PresencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
