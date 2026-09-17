import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePaiementDto {
    @ApiProperty({ description: "ID de l'inscription", example: 1 })
    @IsNotEmpty()
    @IsInt()
    enrollment_id!: number;

    @ApiProperty({ description: 'Montant du paiement', example: 100.0 })
    @IsNotEmpty()
    @IsNumber()
    amount!: number;

    @ApiProperty({ description: 'Méthode de paiement', example: 'Espèce' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    payment_method!: string;
}