import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Registration } from "src/models/registeration.entity";
import { User } from "src/models/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "./user.dto";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async createUser(userdto: CreateUserDto) {

        const user = new User();
        user.name = userdto.name;
        user.email = userdto.email;

        return await this.userRepository.save(user);
    }

    async updateUser(updateuserdto: UpdateUserDto) {

        const user = await this.userRepository.findOne({ where: { id: updateuserdto.id } });
        user.name = updateuserdto.name;
        user.email = updateuserdto.email;

        return await this.userRepository.save(user);
    }
}