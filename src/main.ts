import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from '@/infrastructure/logger/logger.service';
import { AllExceptionFilter } from '@/infrastructure/common/filter/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  await app.listen(3000);
}
bootstrap();