import {ApiProperty} from '@nestjs/swagger';

export class LoginUserRequest {
    @ApiProperty({example: 'Ivan'})
    username: string

    @ApiProperty({example: 'Ivan123'})
    password: string
}


export class LoginUserResponse {
    @ApiProperty({
        example: {
            userId: 1,
            username: 'Ivan',
            email: 'Ivan@mail.ru'
        }
    })
    user: {
        userId: number,
        username: string,
        email: string
    }

    @ApiProperty({example: 'Loggin'})
    msg: string

}

export class LogoutUserResponse {
    @ApiProperty({example: 'Session has ended'})
    msg: string
}


export class LoginCheckResponse {
    @ApiProperty({example: 1})
    userId: number

    @ApiProperty({example: 'Ivan123'})
    username: string

    @ApiProperty({example: 'Ivan123@mail.ru'})
    email: string
}

export class SignUpResponse {
    @ApiProperty({example: 1})
    id: number

    @ApiProperty({example: 'Ivan123'})
    username: string

    @ApiProperty({example: 'Ivan123@mail.ru'})
    email: string

    @ApiProperty({example: '$2b$10$UOix3yv9.oA1p3j36EPJL'})
    password: string

    @ApiProperty({example: '2023-07-25T00:18:42.311Z'})
    updatedAt: string


    @ApiProperty({example: '2023-07-25T00:18:42.311Z'})
    createdAt: string


}