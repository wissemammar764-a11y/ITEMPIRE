import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn({ name: 'session_id' })
  session_id!: number;

  @Column()
  formation_id!: number;

  @Column()
  trainer_id!: number;

  @Column({ nullable: true })
  room!: string;

  @Column({ nullable: true })
  mode!: string;

  @Column({ nullable: true })
  schedule!: string;

  @Column({ type: 'date', nullable: true })
  start_date!: Date;

  @Column({ type: 'date', nullable: true })
  end_date!: Date;

  @Column({ nullable: true })
  status!: string;
}