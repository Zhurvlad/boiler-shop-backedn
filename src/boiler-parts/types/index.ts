import {ApiProperty} from '@nestjs/swagger';
import {faker} from '@faker-js/faker'

class BoilerParts {
    @ApiProperty({example: 1})
    id: number

    @ApiProperty({example: faker.lorem.sentence(2)})
    boiler_manufacturer: string

    @ApiProperty({example: 1234})
    price: number

    @ApiProperty({example: faker.lorem.sentence(2)})
    parts_manufacturer: string

    @ApiProperty({example: faker.internet.password()})
    vendor_code: number

    @ApiProperty({example: faker.lorem.word()})
    name: string

    @ApiProperty({example: faker.lorem.sentence()})
    description: string

    @ApiProperty({example: faker.lorem.sentence()})
    compatibility: string

    @ApiProperty({example: faker.image.city()})
    images: string

    @ApiProperty({example: 5})
    in_stocks: number

    @ApiProperty({example: true})
    bestseller: boolean

    @ApiProperty({example: true})
    new: boolean

    @ApiProperty({example: 123})
    popularity: number

    @ApiProperty({example: '2023-08-10T05:09:22.000Z'})
    createdAt: string

    @ApiProperty({example: '2023-08-10T05:09:22.000Z'})
    updatedAt: string
}

export class PaginateAndFilterResponse {
    @ApiProperty({example:10})
    count: number

    @ApiProperty({type: BoilerParts, isArray: true})
    rows: BoilerParts
}



export class Bestsellers extends BoilerParts{
    @ApiProperty({example: true})
    bestseller: boolean
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
    @ApiProperty({example: 10})
    count: number

    @ApiProperty({type: BoilerParts, isArray: true})
    rows: BoilerParts
}




export class NewParts extends BoilerParts{
    @ApiProperty({example: true})
    new: boolean
}

export class GetNewResponse extends PaginateAndFilterResponse {
    @ApiProperty({example: 10})
    count: number

    @ApiProperty({type: BoilerParts, isArray: true})
    rows: NewParts
}


export class SearchByLetterResponse extends BoilerParts{
    @ApiProperty({example: 'boris'})
    name: string
}
export class SearchResponse extends PaginateAndFilterResponse{
    @ApiProperty({type: SearchByLetterResponse, isArray: true})
    rows: SearchByLetterResponse
}
export class SearchRequest {
    @ApiProperty({example: 'b'})
    search: string
}




export class GetByNameResponse extends BoilerParts{
    @ApiProperty({example: 'boris'})
    name: string
}
export class GetByNameRequest {
    @ApiProperty({example: 'boris'})
    name: string
}




export class FindOneResponse extends BoilerParts{}
export class FindOneRequest {
    @ApiProperty({example: 22})
    id: number
}



export interface IBoilerPartsQuery {
    limit: string,
    offset: string
}