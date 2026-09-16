import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSessionDto {
  @ApiProperty({ example: 1, description: 'ID de la formation' })
  @IsNotEmpty()
  @IsNumber()
  formation_id!: number;

  @ApiProperty({ example: 1, description: 'ID du formateur' })
  @IsNotEmpty()
  @IsNumber()
  trainer_id!: number;

  @ApiPropertyOptional({ example: 'Salle A1' })
  @IsOptional()
  @IsString()
  room?: string;

  @ApiProperty({ example: 'ONSITE', enum: ['ONLINE', 'ONSITE', 'HYBRID'] })
  @IsNotEmpty()
  @IsIn(['ONLINE', 'ONSITE', 'HYBRID'])
  mode!: string;

  @ApiPropertyOptional({ example: 'Lun/Mer 18h-20h' })
  @IsOptional()
  @IsString()
  schedule?: string;

  @ApiProperty({ example: '2026-10-01' })
  @IsNotEmpty()
  start_date!: string;

  @ApiProperty({ example: '2026-12-01' })
  @IsNotEmpty()
  end_date!: string;
}