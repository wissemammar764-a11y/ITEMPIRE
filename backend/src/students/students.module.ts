import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

import { Student } from './entities/student.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, User]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}