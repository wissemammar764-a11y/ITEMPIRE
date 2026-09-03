import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTrainerDto {
  @ApiProperty({ description: 'The first name of the user', maxLength: 20 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  trainer_name!: string;

  @ApiProperty({ description: 'The last name of the user', maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  trainer_last_name!: string;

  @ApiProperty({ description: 'The email of the user', maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  trainer_email!: string;

  @ApiProperty({ description: 'The phone number of the user', maxLength: 20 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  trainer_phone!: string;

  @ApiProperty({ description: 'The national ID of the user', maxLength: 20 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  trainer_cin!: string;

  @ApiProperty({ description: 'The speciality of the user', maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  trainer_speciality!: string;
}
