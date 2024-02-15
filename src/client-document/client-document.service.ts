import { Injectable } from '@nestjs/common';
import { readdir, readFile, writeFile } from 'fs/promises';
import { CreateClientDocumentDto } from './dto/create-client-document.dto';
import { RESPONSE } from './response/response';

@Injectable()
export class ClientDocumentService {
  async create(createClientDocumentDto: CreateClientDocumentDto) {
    await writeFile(`assets/file`, createClientDocumentDto.form_data);
    const { form_data, ...res } = createClientDocumentDto;
    return {
      RESPONSE,
    };
  }

  findOne(documentId: number) {
    return RESPONSE.find(({ id }) => id === documentId);
  }

  async download(id: number): Promise<Buffer> {
    const [file] = await readdir('assets');
    const base64String = await readFile(`assets/${file}`, {
      encoding: 'utf-8',
    });
    console.log(base64String);
    return Buffer.from(base64String, 'base64');
  }

  remove(id: number) {
    return `This action removes a #${id} clientDocument`;
  }
}
