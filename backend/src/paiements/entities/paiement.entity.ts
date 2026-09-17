import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payments')
export class Paiement {
  @PrimaryGeneratedColumn({ name: 'payment_id' })
  payment_id!: number;

  @Column()
  enrollment_id!: number;

  @Column({ type: 'numeric', nullable: true })
  amount!: number;

  @Column({ nullable: true })
  payment_method!: string;

  @Column({ type: 'date', nullable: true })
  payment_date!: Date;

  @Column({ nullable: true })
  payment_status!: string;

  @Column({ nullable: true })
  invoice_number!: string;
}