import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateInscriptionDto {
    @ApiProperty({ description: 'ID de l\'étudiant' })
    @IsNotEmpty()
    @IsInt()
    student_id!: number;

    @ApiProperty({ description: 'ID de la session' })
    @IsNotEmpty()
    @IsInt()
    session_id!: number;
}
