import {Body, Controller, Get, Param, Post, Query, UseGuards} from '@nestjs/common';
import {BoilerPartsService} from './boiler-parts.service';
import {AuthenticatedGuard} from '../auth/authenticated.guard';
import {ApiBody, ApiOkResponse} from '@nestjs/swagger';
import {
    FindOneRequest,
    FindOneResponse,
    GetBestsellersResponse, GetByNameRequest, GetByNameResponse,
    GetNewResponse,
    PaginateAndFilterResponse, SearchRequest,
    SearchResponse
} from './types';

@Controller('boiler-parts')
export class BoilerPartsController {
    constructor(private readonly boilerPartsService: BoilerPartsService) {}

    @ApiOkResponse({type: PaginateAndFilterResponse})
    @UseGuards(AuthenticatedGuard)
    @Get()
    paginateAndFilter(@Query() query){
        return this.boilerPartsService.paginateAndFilter(query)
    }

    @ApiOkResponse({type: FindOneResponse})
    @ApiBody({type: FindOneRequest})
    @UseGuards(AuthenticatedGuard)
    @Get('find/:id')
    getOne(@Param('id') id: string){
        return this.boilerPartsService.findOne(id)
    }

    @ApiOkResponse({type: GetBestsellersResponse})
    @UseGuards(AuthenticatedGuard)
    @Get('bestsellers')
    getBestsellers(){
        return this.boilerPartsService.bestsellers()
    }

    @ApiOkResponse({type: GetNewResponse})
    @ApiBody({type: GetByNameRequest})
    @UseGuards(AuthenticatedGuard)
    @Get('new')
    getNew(){
        return this.boilerPartsService.new()
    }

    @ApiOkResponse({type: SearchResponse})
    @ApiBody({type: SearchRequest})
    @UseGuards(AuthenticatedGuard)
    @Post('search')
    search(@Body() {search} : {search: string}){
        return this.boilerPartsService.searchByString(search)
    }

    @ApiOkResponse({type: GetByNameResponse})
    @ApiBody({type: GetByNameRequest})
    @UseGuards(AuthenticatedGuard)
    @Post('name')
    getByName(@Body() {name} : {name: string}){
        return this.boilerPartsService.findByName(name)
    }
}
