import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateInscriptionDto {
    @ApiProperty({ description: 'The first name of the student', maxLength: 20 })
    @IsNotEmpty()
    @IsInt()
    id_student!: number;

    @ApiProperty({ description: 'The first name of the formation', maxLength: 20 })
    @IsNotEmpty()
    @IsInt()
    id_formation!: number;

    @ApiProperty({ description: 'The date of the inscription' })
    @IsNotEmpty()
    inscription_date!: Date;

    @ApiProperty({ description: 'The session ID', maxLength: 255 })
    @IsNotEmpty()
    @IsInt()
    id_session!: number;
}
