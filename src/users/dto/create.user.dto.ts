import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {


    @ApiProperty({example: 'Ivan'})
    @IsNotEmpty()
    @IsString()
    readonly username: string

    @ApiProperty({example: 'Ivan123'})
    @IsNotEmpty()
    @IsString()
    readonly password: string


    //TODO: Разобраться почему не работает проверка на емэил
    @ApiProperty({example: 'Ivan123@mail.ru'})
    @IsEmail(undefined,{message: 'Enter the correct email address'})
    @IsNotEmpty()
    @IsString()

    readonly email: string

}