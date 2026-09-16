import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';

import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { CreateTrainerAccountDto } from './dto/create-trainer-account.dto';
import { Trainer } from './entities/trainer.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class TrainersService {
  constructor(
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Créer un utilisateur + un formateur (transaction : les deux réussissent
  // ou échouent ensemble, comme pour les étudiants)
  async createTrainerAccount(data: CreateTrainerAccountDto) {
    return this.userRepository.manager.transaction(async (manager) => {
      const existingUser = await manager.findOne(User, {
        where: { email: data.email },
      });

      if (existingUser) {
        throw new ConflictException('Un utilisateur avec cet email existe déjà.');
      }

      const user = manager.create(User, {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        password_hash: data.password,
        role: 'TRAINER',
        status: true,
        created_at: new Date(),
      });

      const savedUser = await manager.save(User, user);

      const trainer = manager.create(Trainer, {
        user_id: savedUser.id_user,
        cin: data.cin,
        speciality: data.speciality,
        experience_years: data.experience_years,
      } as DeepPartial<Trainer>);

      const savedTrainer = await manager.save(Trainer, trainer);

      return {
        message: 'Formateur créé avec succès',
        trainer: savedTrainer,
        user: {
          id_user: savedUser.id_user,
          first_name: savedUser.first_name,
          last_name: savedUser.last_name,
          email: savedUser.email,
          phone: savedUser.phone,
          role: savedUser.role,
        },
      };
    });
  }

  // Récupérer tous les formateurs (jointure avec users pour nom/email/téléphone)
  async findAll() {
    return this.trainerRepository.query(`
      SELECT
        t.trainer_id,
        u.first_name AS prenom,
        u.last_name AS nom,
        u.email,
        u.phone AS telephone,
        t.cin,
        t.speciality AS specialite
      FROM trainers t
      INNER JOIN users u
        ON t.user_id = u.user_id
      ORDER BY t.trainer_id;
    `);
  }

  async findOne(id: number) {
    const result = await this.trainerRepository.query(
      `
      SELECT
        t.trainer_id,
        u.first_name AS prenom,
        u.last_name AS nom,
        u.email,
        u.phone AS telephone,
        t.cin,
        t.speciality AS specialite
      FROM trainers t
      INNER JOIN users u
        ON t.user_id = u.user_id
      WHERE t.trainer_id = $1;
      `,
      [id],
    );

    return result[0] || null;
  }

  update(id: number, updateTrainerDto: UpdateTrainerDto) {
    return this.trainerRepository.update({ trainer_id: id } as any, updateTrainerDto as any);
  }

  remove(id: number) {
    return this.trainerRepository.delete({ trainer_id: id } as any);
  }
}