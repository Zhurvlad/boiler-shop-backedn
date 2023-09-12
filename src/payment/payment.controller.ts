import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {PaymentService} from './payment.service';
import {AuthenticatedGuard} from '../auth/authenticated.guard';
import {MakePaymentDto} from './dto/make.payment.dto';
import {ApiOkResponse} from '@nestjs/swagger';
import {MakePaymentResponse} from './types';
import {CheckPaymentDto} from './dto/checkPayment.dto';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {
    }

    @ApiOkResponse({type : MakePaymentResponse})
    @UseGuards(AuthenticatedGuard)
    @Post()
    makePayment(@Body() makePaymentDto: MakePaymentDto){
        return this.paymentService.makePayment(makePaymentDto)
    }


    @UseGuards(AuthenticatedGuard)
    @Post('/info')
    checkPayment(@Body() checkPaymentDto: CheckPaymentDto){
        return this.paymentService.checkPayment(checkPaymentDto)
    }
}
