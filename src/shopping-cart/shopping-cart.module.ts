import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {ShoppingCart} from './shopping-cart.model';
import {UsersModule} from '../users/users.module';
import {BoilerParts} from '../boiler-parts/boiler-parts.model';
import {BoilerPartsModule} from '../boiler-parts/boiler-parts.module';

@Module({
  imports: [ SequelizeModule.forFeature([ShoppingCart]),
    UsersModule,
    BoilerPartsModule],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService]
})
export class ShoppingCartModule {}
