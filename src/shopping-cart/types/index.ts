import {ApiProperty} from '@nestjs/swagger';

/*"id": 1,
    "userId": 5,
    "partId": 22,
    "boiler_manufacturer": "Henry",
    "price": 4937,
    "parts_manufacturer": "Montana",
    "name": "Consequuntur cupiditate.",
    "image": "https://loremflickr.com/640/480/technics?random=000219163465238952493474924909",
    "in_stocks": 5,
    "count": 0,
    "total_price": 4937,
    "createdAt": "2023-08-11T07:49:09.000Z",
    "updatedAt": "2023-08-11T07:49:09.000Z"*/

class ShoppingCartItem {
    @ApiProperty({example: 2})
    id: number

    @ApiProperty({example: 'Consequuntur cupiditate.'})
    name: string

    @ApiProperty({example: 2500})
    price: number

    @ApiProperty({example: 'https://loremflickr.com/640/480/technics?random=000219163465238952493474924909'})
    image: string

    @ApiProperty({example: 5})
    in_stock: number

    @ApiProperty({example: "Montana"})
    parts_manufacturer: string

    @ApiProperty({example: "Henry"})
    boiler_manufacturer: string

    @ApiProperty({example: 5})
    userId: number

    @ApiProperty({example: 22})
    partId: number

    @ApiProperty({example: 2})
    count: number

    @ApiProperty({example: 12500})
    total_price: number

    @ApiProperty({example: '2023-08-11T07:49:09.000Z'})
    createdAt: string

    @ApiProperty({example: '2023-08-11T07:49:09.000Z'})
    updatedAt: string
}

export class GetAllResponse extends  ShoppingCartItem{}

export class AddToCartResponse extends  ShoppingCartItem{}



export class UpdateCountResponse {
    @ApiProperty({example: 2})
    count: number
}

export class UpdateCountRequest extends UpdateCountResponse{}




export class TotalPriceResponse {
    @ApiProperty({example: 2500})
    total_price: number
}

export class TotalPriceRequest extends TotalPriceResponse{}


