import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.findOne({ where: { email: loginUserDto.email } });
    if (!user || user.password_hash !== loginUserDto.password) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    const { password_hash, ...safeUser } = user;
    return safeUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id_user: number) {
  const user = await this.userRepository.findOne({
    where: { id_user },
  });

  if (!user) {
    throw new Error(`User with id ${id_user} not found`);
  }

  await this.userRepository.delete(id_user);

  return `user deleted successfully`;
}}