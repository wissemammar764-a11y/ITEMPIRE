import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTaskDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    task_name!: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    task_description!: string;

    @ApiProperty()
    @IsNotEmpty()
    trainer_id!: number;

    @ApiProperty()
    @IsNotEmpty()
    deadline!: Date;
}
