import { Module } from '@nestjs/common';
import { PaiementsService } from './paiements.service';
import { PaiementsController } from './paiements.controller';
import { Paiement } from './entities/paiement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Paiement])],
  controllers: [PaiementsController],
  providers: [PaiementsService],
})
export class PaiementsModule {}
