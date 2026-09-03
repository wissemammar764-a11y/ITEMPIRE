import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FormationController } from './formation.controller';
import { FormationService } from './formation.service';
import { Formation } from './entities/formation.entity';

describe('FormationController', () => {
  let controller: FormationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormationController],
      providers: [
        FormationService,
        { provide: getRepositoryToken(Formation), useValue: {} },
      ],
    }).compile();

    controller = module.get<FormationController>(FormationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
