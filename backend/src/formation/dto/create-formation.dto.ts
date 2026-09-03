import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateFormationDto {
    @ApiProperty({ description: 'The name of the formation', maxLength: 100 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    formation_name!: string;
    @ApiProperty({ description: 'The description of the formation', maxLength: 255 })
    @IsString()
    @MaxLength(255)
    formation_description!: string;
    @ApiProperty({ description: 'The duration of the formation' })
    @IsString()
    formation_duration!: string;
    @ApiProperty({ description: 'The price of the formation' })
    @IsNotEmpty()
    @IsString()
    formation_price!: number;
}
