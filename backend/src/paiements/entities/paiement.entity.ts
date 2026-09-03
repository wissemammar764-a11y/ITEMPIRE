import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class Paiement {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    id_student!: number;

    @Column()
    id_session!: number;

    @Column('decimal', { precision: 10, scale: 2 })
    amount!: number;

    @Column()
    method!: string;
}
