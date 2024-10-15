import { IsEmail, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditSheetEventDto {
  @IsIn(['NONE', 'CUSTOM_FUNCTION', 'LIMITED', 'FULL'])
  authMode: string;

  @IsOptional()
  @IsString()
  oldValue: string;

  @IsNumber()
  range: number;

  @IsString()
  source: string;

  @IsOptional()
  triggerUid: any;

  @IsEmail()
  user: string;

  @IsOptional()
  @IsString()
  value: string;
}
