import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from 'src/config/sequelizqConfig.service';
import { databaseConfig } from 'src/config/configuration';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/user.model';
import * as bcrypt from 'bcrypt';
import * as request from 'supertest';
import { response } from 'express';
import { UsersService } from 'src/users/users.service';



describe('Users Service', () => {
  let app: INestApplication
  let userService : UsersService

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      imports : [
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          useClass: SequelizeConfigService,
        }),
        ConfigModule.forRoot({
          load: [databaseConfig]
        }),
        UsersModule,
      ]
    }).compile()

    userService = testModule.get<UsersService>(UsersService)
    app = testModule.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await User.destroy({where: {username: 'test'}})
  })

  it('should create user', async () => {
    const newUser = {
      username: 'test',
      email: 'test@gmail.com',
      password: '1234test'
    }

    const user = await userService.create(newUser) as User


    const passportIsValid = await bcrypt.compare(newUser.password, user.password)

    expect(user.username).toBe(newUser.username)
    expect(user.email).toBe(newUser.email)
    expect(passportIsValid).toBe(true)
  })




})