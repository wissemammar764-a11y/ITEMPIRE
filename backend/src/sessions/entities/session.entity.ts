import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class Session {
    @PrimaryGeneratedColumn()
    session_id!: number;
    @Column()
    formation_id!: number;
    @Column()
    trainer_id!: number;
    @Column()
    room!: string;
    @Column()
    mode!: string;
    @Column()
    schedule!: string;
    @Column()
    start_date!: Date;
    @Column()
    end_date!: Date;
    @Column()
    status!: string;

}
