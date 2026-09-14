import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsBoolean, MaxLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ description: 'The first name of the user', maxLength: 20 })
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    first_name!: string;
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    @ApiProperty({ description: 'The last name of the user', maxLength: 20 })
    last_name!: string;
    @ApiProperty({ description: 'The email of the user', maxLength: 50 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    email!: string;
    @ApiProperty({ description: 'The phone number of the user', maxLength: 15 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(15)
    phone!: string;
    @ApiProperty({ description: 'The password of the user', maxLength: 100 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    password_hash!: string;
    @ApiProperty({ description: 'The role of the user', maxLength: 20 })
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    role!: string;
    @ApiProperty({ description: 'The status of the user' })
    @IsBoolean()
    status!: boolean;
    @ApiProperty({ description: 'The creation date of the user' })
    @IsNotEmpty()
    created_at!: Date;


}