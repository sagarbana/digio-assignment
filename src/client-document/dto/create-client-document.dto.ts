import { Transform } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { DisplayOnPage } from '../types/client-document.types';

export class CreateClientDocumentDto {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  signers?: Signers[];

  @IsOptional()
  @MaxLength(100)
  file_name: string;

  @IsNotEmpty()
  form_data: string;
  
  @IsOptional()
  expire_in_days: number;

  @IsOptional()
  display_on_page: DisplayOnPage;
}
export class Signers {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsString()
  @IsNotEmpty()
  identifier: string;

  @IsOptional()
  @IsString()
  reason: string;
}
