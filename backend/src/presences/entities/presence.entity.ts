import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('attendance')
export class Presence {
  @PrimaryGeneratedColumn({ name: 'attendance_id' })
  attendance_id!: number;

  @Column()
  enrollment_id!: number;

  @Column({ type: 'date', nullable: true })
  attendance_date!: Date;

  @Column({ nullable: true })
  status!: string;
}