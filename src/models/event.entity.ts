import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Registration } from "./registeration.entity";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    date: string;

    @OneToMany(() => Registration, (registration) => registration.event)
    registrations: Registration[];

} 