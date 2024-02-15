import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientDocumentModule } from './client-document/client-document.module';

@Module({
  imports: [ClientDocumentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
