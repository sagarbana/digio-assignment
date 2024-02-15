import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigs } from './configs/appConfigs.enum';
import { ConfigsService } from './configs/configs.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.setGlobalPrefix(ConfigsService.getValue(AppConfigs.API_GLOBAL_PREFIX));
  await app.listen(ConfigsService.getValue(AppConfigs.PORT));
}
bootstrap();
