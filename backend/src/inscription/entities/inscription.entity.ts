import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class Inscription {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    id_student!: number;
    @Column()
    id_formation!: number;
    @Column()
    inscription_date!: Date;
    @Column()
    id_session!: number;
    
}
