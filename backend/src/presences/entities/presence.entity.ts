import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class Presence {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    id_student!: number;
    @Column()
    id_session!: number
    @Column()
    status!: string;
    
}
