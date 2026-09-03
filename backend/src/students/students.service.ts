import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  findAll() {
    return this.studentRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.findOne({
      where: {
        student_id: id,
      },
    });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentRepository.update(
      { student_id: id },
      updateStudentDto,
    );
  }

  remove(id: number) {
    return this.studentRepository.delete({
      student_id: id,
    });
  }
}