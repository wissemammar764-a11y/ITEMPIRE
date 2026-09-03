import { Test, TestingModule } from '@nestjs/testing';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Session } from './entities/session.entity';

describe('SessionsController', () => {
  let controller: SessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessionsController],
      providers: [
        SessionsService,
        { provide: getRepositoryToken(Session), useValue: {} },
      ],
    }).compile();

    controller = module.get<SessionsController>(SessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
