import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Registration } from "src/models/registeration.entity";
import { User } from "src/models/user.entity";
import { Event } from "src/models/event.entity";
import { Repository } from "typeorm";
import { CreateRegisterationDto } from "./registeration.dto";

@Injectable()
export class RegisterationService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Event) private eventRepository: Repository<Event>,
        @InjectRepository(Registration) private registerationRepository: Repository<Registration>) { }

    async createRegisteration(createRegisterationDto: CreateRegisterationDto) {

        const user = await this.userRepository.findOne({ where: { id: createRegisterationDto.userid } });
        const event = await this.eventRepository.findOne({ where: { id: createRegisterationDto.eventid } });

        const registeration = new Registration();
        registeration.user = user;
        registeration.event = event;
        registeration.registrationDate = createRegisterationDto.date;

        return await this.registerationRepository.save(registeration);
    }

    async getRegisteration(id: number) {
        return await this.registerationRepository.findOne({ where: { id: id }, relations: ['user', 'event'] });
    }

    async updateRegisteration(createRegisterationDto: CreateRegisterationDto) {

        const user = await this.userRepository.findOne({ where: { id: createRegisterationDto.userid } });
        const event = await this.eventRepository.findOne({ where: { id: createRegisterationDto.eventid } });
        const registeration = await this.registerationRepository.findOne({ where: { user, event } });


        registeration.user = user;
        registeration.event = event;
        registeration.registrationDate = createRegisterationDto.date;

        return await this.registerationRepository.save(registeration);
    }

}