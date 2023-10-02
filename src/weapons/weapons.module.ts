import { Module } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { WeaponsController } from './weapons.controller';
import { DatabaseModule } from '../database/database.module';
import { weaponProviders } from './weapons.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [WeaponsController],
    providers: [...weaponProviders, WeaponsService],
})
export class WeaponsModule {}
