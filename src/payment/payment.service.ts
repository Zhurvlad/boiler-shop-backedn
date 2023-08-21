import {ForbiddenException, Injectable} from '@nestjs/common';
import {MakePaymentDto} from './dto/make.payment.dto';
import axios from 'axios'

@Injectable()
export class PaymentService {
    async makePayment(makePaymentDto: MakePaymentDto) {
       try {
           const {data} = await axios({
               method: 'POST',
               url: 'https://api.yookassa.ru/v3/payments',
               headers:{
                   'Content-Type': 'application/json',
                   'Idempotence-Key': Date.now(),
               },
               auth: {
                   username: '241873',
                   password: 'test_HQrsEJy6uZtrZ0N83abDN1DhD_KWHlGDXGurVxC3_Kg',
               },
               data: {
                   amount: {
                       value: makePaymentDto.amount,
                       currency: "RUB"
                   },
                   capture: true,
                   confirmation: {
                       type: 'redirect',
                       return_url: 'http://localhost:3001/order'
                   },
                   description: 'Заказ №1'
               }
           })

           return data

       } catch (e) {
           throw new ForbiddenException(e)
       }
    }
}

/*@Injectable()
export class PaymentService {
    async makePayment(makePaymentDto: MakePaymentDto) {
        try {
            const {data} = await axios({
                method: 'POST',
                url: 'https://api.yookassa.ru/v3/payments',
                headers: {
                    'Content-Type': 'application/json',
                    'Idempotence-Key': Date.now(),
                },
                auth: {
                    username: '241873',
                    password: 'test_HQrsEJy6uZtrZ0N83abDN1DhD_KWHlGDXGurVxC3_Kg',
                },
                data: {
                    amount: {
                        value: makePaymentDto.amount,
                        currency: 'RUB',
                    },
                    capture: true,
                    confirmation: {
                        type: 'redirect',
                        return_url: 'http://localhost:3001/order',
                    },
                    description: 'makePaymentDto.description',
                },
            });

            return data;
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }
}*/
