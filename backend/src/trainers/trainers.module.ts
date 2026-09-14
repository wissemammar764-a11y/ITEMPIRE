import { Module } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';
import { Trainer } from './entities/trainer.entity';
import { User } from '../user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Trainer, User])],
  controllers: [TrainersController],
  providers: [TrainersService],
})
export class TrainersModule {}