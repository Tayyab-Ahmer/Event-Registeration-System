import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/models/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { Registration } from "src/models/registeration.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }