import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class Formation {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    formation_name!: string;
    @Column()
    formation_description!: string;
    @Column()
    formation_duration!: string;
    @Column()
    formation_price!: number;
}
