import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePresenceDto {
    @ApiProperty({ description: 'The ID of the student', example: 1 })
    @IsNotEmpty()
    @IsInt()
    id_student!: number;
    @ApiProperty({ description: 'The ID of the session', example: 1 })
    @IsNotEmpty()
    @IsInt()
    id_session!: number;
    @ApiProperty({ description: 'The status of the presence', maxLength: 50 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    status!: string;

}
