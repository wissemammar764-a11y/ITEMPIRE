import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateSessionDto {
    @ApiProperty({ description: 'The formation id of the session', maxLength: 20 })
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    formation_id!: number;
    @ApiProperty({ description: 'The trainer id of the session', maxLength: 20 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    trainer_id!: number;
    @ApiProperty({ description: 'The room of the session', maxLength: 100 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    room!: string;
    @ApiProperty({ description: 'The mode of the session', maxLength: 100 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    mode!: string;
    @ApiProperty({ description: 'The schedule of the session', maxLength: 200 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    schedule!: string;
    @ApiProperty({ description: 'The start date of the session' })
    @IsNotEmpty()
    start_date!: Date;
    @ApiProperty({ description: 'The end date of the session' })
    @IsNotEmpty()
    end_date!: Date;
    @ApiProperty({ description: 'The status of the session', maxLength: 50 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    status!: string;

}
