import { Module } from '@nestjs/common';
import { InscriptionService } from './inscription.service';
import { InscriptionController } from './inscription.controller';
import { Inscription } from './entities/inscription.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Inscription])],
  controllers: [InscriptionController],
  providers: [InscriptionService],
})
export class InscriptionModule {}
