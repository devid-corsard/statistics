import { Module } from '@nestjs/common';
import { StrikesService } from './strikes.service';
import { StrikesController } from './strikes.controller';
import { DatabaseModule } from '../database/database.module';
import { strikesProviders } from './strikes.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [StrikesController],
    providers: [...strikesProviders, StrikesService],
})
export class StrikesModule {}
