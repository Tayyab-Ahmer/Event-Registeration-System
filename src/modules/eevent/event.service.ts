import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "src/models/event.entity";
import { Repository } from "typeorm";
import { CreateEventDto, UpdateEventDto } from "./event.dto";

@Injectable()
export class EventService {

    constructor(@InjectRepository(Event) private eventRepository: Repository<Event>) { }

    async createEvent(createEventDto: CreateEventDto) {

        const event = new Event();
        event.title = createEventDto.title;
        event.description = createEventDto.description;
        event.date = createEventDto.date;

        return await this.eventRepository.save(event);
    }

    async updateEvent(updateEventDto: UpdateEventDto) {

        const event = await this.eventRepository.findOne({ where: { id: updateEventDto.id } });
        
        event.title = updateEventDto.title;
        event.description = updateEventDto.description;
        event.date = updateEventDto.date;

        return await this.eventRepository.save(event);
    }
}