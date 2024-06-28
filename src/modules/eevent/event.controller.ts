import { Body, Controller, Post, Put } from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto, UpdateEventDto } from "./event.dto";

@Controller('event')
export class EventController {

    constructor(private readonly eventService: EventService) { }

    @Post('create')
    async createEvent(@Body() createEventDto: CreateEventDto) {
        return await this.eventService.createEvent(createEventDto);
    }

    @Put('update')
    async updateEvent(@Body() updateEventDto: UpdateEventDto) {
        return await this.eventService.updateEvent(updateEventDto);
    }
}