// src/event/dtos/create-event.dto.ts
import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreateEventDto {
    
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsDateString()
    date: string;
}

export class UpdateEventDto {


    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsDateString()
    date: string;
}
