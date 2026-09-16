import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('formations')
export class Formation {
  @PrimaryGeneratedColumn({ name: 'formation_id' })
  formation_id!: number;

  @Column()
  title!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @Column({ nullable: true })
  category!: string;

  @Column({ nullable: true })
  level!: string;

  @Column({ nullable: true })
  duration_hours!: number;

  @Column({ nullable: true })
  language!: string;

  @Column({ type: 'numeric', nullable: true })
  price!: number;

  @Column({ nullable: true })
  max_students!: number;

  @Column({ nullable: true })
  status!: string;

  @Column({ nullable: true })
  created_at!: Date;
}