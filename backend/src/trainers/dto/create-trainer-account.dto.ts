import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTrainerAccountDto {
  @ApiProperty({ example: 'Amine' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  first_name!: string;

  @ApiProperty({ example: 'Ben Salah' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  last_name!: string;

  @ApiProperty({ example: 'amine@exemple.com' })
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

  @ApiProperty({ example: 'Développement Web' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  speciality!: string;

  @ApiPropertyOptional({ example: 3 })
  @IsOptional()
  experience_years?: number;
}