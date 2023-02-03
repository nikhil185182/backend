import { NestFactory } from '@nestjs/core';
import { AppModule } from './main.module';
// import * as dotenv from 'dotenv';

// dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
