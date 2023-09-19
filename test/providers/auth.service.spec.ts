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
import * as session from 'express-session';
import * as passport from 'passport';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

const mockedUser = {
  username: 'john',
  email: 'john@gmail.com',
  password: '1234qwer',
};

describe('Auth Service', () => {
  let app: INestApplication;
  let authService: AuthService

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          useClass: SequelizeConfigService,
        }),
        ConfigModule.forRoot({
          load: [databaseConfig],
        }),
        AuthModule,
      ],
    }).compile();

    authService = testModule.get<AuthService>(AuthService)
    app = testModule.createNestApplication();

    await app.init();
  });

    beforeEach(async () => {
      const user = new User();

      const hashedPassword = await bcrypt.hash(mockedUser.password, 10);

      user.username = mockedUser.username;
      user.email = mockedUser.email;
      user.password = hashedPassword;

      return user.save();
    });

    afterEach(async () => {
      await User.destroy({ where: { username: mockedUser.username } });
    });

    it('should login user', async () => {
      const user = await authService.validateUser(mockedUser.username, mockedUser.password)

      expect(user.username).toBe(mockedUser.username);
      expect(user.email).toBe(mockedUser.email);

    });
  });
