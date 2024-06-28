import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { User } from './models/user.entity';
import { Registration } from './models/registeration.entity';
import { Event } from './models/event.entity';
import { EventModule } from './modules/eevent/event.module';
import { RegisterationModule } from './modules/registeration/registeration.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'newpassword',
    database: 'event-management-system',
    entities: [User, Event, Registration],
    synchronize: true,
    autoLoadEntities: true,
    retryAttempts: 2,
    // logging: true,
  }), UserModule, EventModule, RegisterationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
