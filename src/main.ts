import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT=3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log (`Listening on port: ` + PORT);
  await app.listen(PORT);
}
bootstrap();
