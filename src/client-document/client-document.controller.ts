import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ClientDocumentService } from './client-document.service';
import { CreateClientDocumentDto } from './dto/create-client-document.dto';

@Controller('client/document')
export class ClientDocumentController {
  constructor(private readonly clientDocumentService: ClientDocumentService) {}

  @Post('upload')
  create(@Body() createClientDocumentDto: CreateClientDocumentDto) {
    return this.clientDocumentService.create(createClientDocumentDto);
  }

  @Get(':documentId')
  async findOne(@Param('documentId') documentId: number) {
    return this.clientDocumentService.findOne(documentId);
  }

  @Get('download/:document_id')
  async download(
    @Param('document_id') document_id: number,
    @Res() res: Response,
  ) {
    const pdfBuffer = this.clientDocumentService.download(document_id);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="example.pdf"');
    res.send(pdfBuffer);
  }
}
