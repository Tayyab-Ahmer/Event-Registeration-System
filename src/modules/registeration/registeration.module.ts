import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Registration } from "src/models/registeration.entity";
import { RegisterationController } from "./registeration.controller";
import { RegisterationService } from "./registeration.service";
import { User } from "src/models/user.entity";
import { Event } from "src/models/event.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Registration,User,Event])],
    controllers: [RegisterationController],
    providers: [RegisterationService],
})
export class RegisterationModule { }