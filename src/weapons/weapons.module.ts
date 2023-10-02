import { Module } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { WeaponsController } from './weapons.controller';
import { Weapon } from './weapon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Weapon])],
    controllers: [WeaponsController],
    providers: [WeaponsService],
    exports: [WeaponsService],
})
export class WeaponsModule {}
