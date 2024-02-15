import { Module } from '@nestjs/common';
import { ClientDocumentService } from './client-document.service';
import { ClientDocumentController } from './client-document.controller';

@Module({
  controllers: [ClientDocumentController],
  providers: [ClientDocumentService],
})
export class ClientDocumentModule {}
