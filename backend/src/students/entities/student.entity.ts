import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  student_id!: number;

  @Column()
  user_id!: number;

  @Column({ nullable: true })
  cin!: string;

  @Column({ type: 'date', nullable: true })
  birth_date!: Date;

  @Column({ nullable: true })
  gender!: string;

  @Column({ type: 'text', nullable: true })
  address!: string;

  @Column({ nullable: true })
  city!: string;

  @Column({ nullable: true })
  country!: string;

  @Column({ nullable: true })
  education_level!: string;
}