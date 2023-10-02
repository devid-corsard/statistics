import { Test, TestingModule } from '@nestjs/testing';
import { StrikesService } from './strikes.service';

describe('StrikesService', () => {
  let service: StrikesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrikesService],
    }).compile();

    service = module.get<StrikesService>(StrikesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
