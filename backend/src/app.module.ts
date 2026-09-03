import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionsModule } from './sessions/sessions.module';
import { StudentsModule } from './students/students.module';
import { TrainersModule } from './trainers/trainers.module';
import { FormationModule } from './formation/formation.module';
import { InscriptionModule } from './inscription/inscription.module';
import { PaiementsModule } from './paiements/paiements.module';
import { PresencesModule } from './presences/presences.module';
import { TasksModule } from './tasks/tasks.module';
import { factory } from 'typescript';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "127.0.0.1",
    port: 5432,
    username: "postgres",
    password: "123456789",
    database: "ITEMMPIRE",
    autoLoadEntities: true,
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: false,  
  }),UserModule, SessionsModule, StudentsModule, TrainersModule, FormationModule, InscriptionModule, PaiementsModule, PresencesModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
