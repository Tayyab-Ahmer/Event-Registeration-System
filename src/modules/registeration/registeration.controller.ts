import { Body, Controller, Get, Post, Put, Query } from "@nestjs/common";
import { RegisterationService } from "./registeration.service";
import { CreateRegisterationDto } from "./registeration.dto";

@Controller('registeration')
export class RegisterationController {

    constructor(private readonly registerationService: RegisterationService) { }

    @Post('create')
    async createRegisteration(@Body() createRegisterationDto: CreateRegisterationDto) {
        return await this.registerationService.createRegisteration(createRegisterationDto);
    }

    @Get('get')
    async getRegisteration(@Query('id') id: number) {
        return await this.registerationService.getRegisteration(id);
    }

    @Put('update')
    async updateRegisteration(@Body() createRegisterationDto: CreateRegisterationDto) {
        return await this.registerationService.updateRegisteration(createRegisterationDto);
    }
}