import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {

  @PrimaryGeneratedColumn()
  id_user!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  password_hash!: string;

  @Column()
  role!: string;

  @Column()
  status!: string;

  @Column()
  created_at!: Date;
}