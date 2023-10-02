import { Test, TestingModule } from '@nestjs/testing';
import { StrikesController } from './strikes.controller';
import { StrikesService } from './strikes.service';

describe('StrikesController', () => {
  let controller: StrikesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrikesController],
      providers: [StrikesService],
    }).compile();

    controller = module.get<StrikesController>(StrikesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
