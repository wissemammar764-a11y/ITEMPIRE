import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ description: 'ID de l’utilisateur associé' })
  @IsNotEmpty()
  @IsInt()
  user_id!: number;

  @ApiPropertyOptional({ description: 'CIN de l’étudiant', maxLength: 20 })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  cin?: string;

  @ApiPropertyOptional({ description: 'Date de naissance', example: '2001-03-10' })
  @IsOptional()
  @IsDateString()
  birth_date?: string;

  @ApiPropertyOptional({ description: 'Genre', example: 'Male' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  gender?: string;

  @ApiPropertyOptional({ description: 'Adresse' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'Ville', example: 'Tunis' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  city?: string;

  @ApiPropertyOptional({ description: 'Pays', example: 'Tunisie' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  country?: string;

  @ApiPropertyOptional({ description: 'Niveau d’étude', example: 'Licence' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  education_level?: string;
}