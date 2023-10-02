import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckModule } from './health_check/health_check.module';
import { ConfigModule } from '@nestjs/config';
import { StrikesModule } from './strikes/strikes.module';
import { WeaponsModule } from './weapons/weapons.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            expandVariables: true,
        }),
        HealthCheckModule,
        DatabaseModule,
        StrikesModule,
        WeaponsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
