import { Module } from '@nestjs/common';
import { StrikesService } from './strikes.service';
import { StrikesController } from './strikes.controller';
import { DatabaseModule } from '../database/database.module';
import { strikesProviders } from './strikes.providers';
import { WeaponsModule } from '../weapons/weapons.module';

@Module({
    imports: [DatabaseModule, WeaponsModule],
    controllers: [StrikesController],
    providers: [...strikesProviders, StrikesService],
})
export class StrikesModule {}
