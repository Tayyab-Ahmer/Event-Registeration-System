import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Event } from "./event.entity";
import { User } from "./user.entity";
@Entity()
export class Registration {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Event, (event) => event.registrations)
    event: Event;

    @ManyToOne(() => User, (user) => user.registrations)
    user: User;

    @Column()
    registrationDate: string;
    // registeration: globalThis.Event;
}