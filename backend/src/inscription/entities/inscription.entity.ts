import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('enrollments')
export class Inscription {
  @PrimaryGeneratedColumn({ name: 'enrollment_id' })
  enrollment_id!: number;

  @Column()
  student_id!: number;

  @Column()
  session_id!: number;

  @Column({ type: 'date', nullable: true })
  registration_date!: Date;

  @Column({ nullable: true })
  status!: string;
}