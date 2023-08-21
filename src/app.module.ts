import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {SequelizeModule} from '@nestjs/sequelize';
import {ConfigModule} from '@nestjs/config';
import {SequelizeConfigService} from './config/sequelizqConfig.service';
import {databaseConfig} from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { BoilerPartsModule } from './boiler-parts/boiler-parts.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { PaymentModule } from './payment/payment.module';


@Module({
    imports: [
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useClass: SequelizeConfigService,
        }),
        ConfigModule.forRoot({
            load: [databaseConfig]
        }),
        UsersModule,
        AuthModule,
        BoilerPartsModule,
        ShoppingCartModule,
        PaymentModule],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class AppModule {
}
