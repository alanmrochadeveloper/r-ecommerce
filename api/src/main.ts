import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/* import { createConnection } from 'typeorm'; */

async function bootstrap() {
  /* await createConnection(); */
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
