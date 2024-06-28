import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRegisterationDto {

    @IsNumber()
    @IsNotEmpty()
    userid: number;

    @IsNumber()
    @IsNotEmpty()
    eventid: number;

    @IsDateString()
    date: string;

}