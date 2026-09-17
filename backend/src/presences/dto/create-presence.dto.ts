import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsInt, IsNotEmpty } from "class-validator";

export class CreatePresenceDto {
    @ApiProperty({ description: "ID de l'inscription", example: 1 })
    @IsNotEmpty()
    @IsInt()
    enrollment_id!: number;

    @ApiProperty({ description: 'Statut de présence', enum: ['PRESENT', 'ABSENT', 'LATE'] })
    @IsNotEmpty()
    @IsIn(['PRESENT', 'ABSENT', 'LATE'])
    status!: string;
}