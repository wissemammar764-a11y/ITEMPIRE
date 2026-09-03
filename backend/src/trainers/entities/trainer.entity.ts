import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class Trainer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  trainer_name!: string;
  @Column()
  trainer_last_name!: string;
  @Column()
  trainer_email!: string;
  @Column()
  trainer_phone!: string;
  @Column()
  trainer_cin!: string;
  @Column()
  trainer_speciality!: string;

    
}
