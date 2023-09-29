import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.setGlobalPrefix('api', {
            exclude: ['health_check'],
        });
        await app.init();
    });

    it('Health check works', () => {
        return request(app.getHttpServer()).get('/health_check').expect(200);
    });

    it('Api route works', () => {
        return request(app.getHttpServer()).get('/api/rockets').expect(200);
    });
});
