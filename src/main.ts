import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api', {
        exclude: ['health_check'],
    });
    await app.listen(16000);
}
bootstrap();
