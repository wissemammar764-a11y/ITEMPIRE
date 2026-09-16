import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateStudentAccountDto {
  @ApiProperty({ example: 'Ahmed' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  first_name!: string;

  @ApiProperty({ example: 'Ben Ali' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  last_name!: string;

  @ApiProperty({ example: 'ahmed@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({ example: '20111111' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  phone!: string;

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  cin!: string;

  @ApiProperty({ example: 'motdepasse123' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  password!: string;

  @ApiPropertyOptional({ example: '2001-03-10' })
  @IsOptional()
  @IsDateString()
  birth_date?: string;

  @ApiPropertyOptional({ example: 'Female' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  gender?: string;

  @ApiPropertyOptional({ example: 'Rue de la Liberté' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ example: 'Tunis' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  city?: string;

  @ApiPropertyOptional({ example: 'Tunisie' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  country?: string;

  @ApiPropertyOptional({ example: 'Master' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  education_level?: string;
}