import { Module } from '@nestjs/common';
import { StrikesService } from './strikes.service';
import { StrikesController } from './strikes.controller';
import { WeaponsModule } from '../weapons/weapons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Strike } from './strike.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Strike]), WeaponsModule],
    controllers: [StrikesController],
    providers: [StrikesService],
})
export class StrikesModule {}
