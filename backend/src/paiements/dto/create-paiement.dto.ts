import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePaiementDto {
    @ApiProperty({ description: 'The ID of the student', example: 1 })
    @IsNotEmpty()
    id_student!: number;

    @ApiProperty({ description: 'The ID of the session', example: 1 })
    @IsNotEmpty()
    id_session!: number;

    @ApiProperty({ description: 'The amount of the payment', example: 100.00 })
    @IsNotEmpty()
    amount!: number;

    @ApiProperty({ description: 'The method of the payment', example: 'Cash' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    method!: string;
}
