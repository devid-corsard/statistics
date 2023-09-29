import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckModule } from './health_check/health_check.module';
import { RocketsModule } from './rockets/rockets.module';

@Module({
    imports: [HealthCheckModule, RocketsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
