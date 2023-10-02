import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckModule } from './health_check/health_check.module';
import { ConfigModule } from '@nestjs/config';
import { StrikesModule } from './strikes/strikes.module';
import { WeaponsModule } from './weapons/weapons.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({
            expandVariables: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.PG_HOST,
            port: +process.env.PG_PORT,
            username: process.env.PG_USERNAME,
            password: process.env.PG_PASSWORD,
            database: process.env.TEST
                ? crypto.randomUUID().toString()
                : process.env.PG_DBNAME,
            entities: [],
            synchronize: true,
            dropSchema: true,
            autoLoadEntities: true,
        }),
        HealthCheckModule,
        StrikesModule,
        WeaponsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
