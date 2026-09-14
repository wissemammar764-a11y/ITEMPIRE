import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// La vraie table métier est "trainers" (pluriel) — référencée par
// sessions.trainer_id. Le nom/email/téléphone du formateur vivent dans
// la table "users" (via user_id), pas ici.
@Entity('trainers')
export class Trainer {
  @PrimaryGeneratedColumn({ name: 'trainer_id' })
  trainer_id!: number;

  @Column()
  user_id!: number;

  @Column({ nullable: true })
  cin!: string;

  @Column({ nullable: true })
  speciality!: string;

  @Column({ nullable: true })
  experience_years!: number;

  @Column({ nullable: true })
  salary!: number;

  @Column({ nullable: true })
  rating!: number;

  @Column({ nullable: true })
  availability!: boolean;
}