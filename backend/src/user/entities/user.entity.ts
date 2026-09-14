import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// La vraie table métier est "users" (pluriel) — c'est elle que référencent
// les clés étrangères de students/enrollments/etc. et qui contient les
// comptes seedés (STUDENT/TRAINER/RH/ADMIN). La table "user" (singulier)
// était une table parallèle non reliée au reste du schéma.
@Entity('users')
export class User {

  @PrimaryGeneratedColumn({ name: 'user_id' })
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
  status!: boolean;

  @Column()
  created_at!: Date;
}