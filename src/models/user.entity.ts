import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Registration } from "./registeration.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Registration, (registration) => registration.user)
    registrations: Registration[];
}