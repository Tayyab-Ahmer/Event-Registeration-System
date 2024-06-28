import { Body, Controller, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) { }

    @Post('add')
    async createUser(@Body() userdto:CreateUserDto) {
        return await this.userService.createUser(userdto);
    }

    @Put('update')
    async updateUser(@Body() updateuserdto:UpdateUserDto) {
        return await this.userService.updateUser(updateuserdto);
    }
}