import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class Task {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    task_name!: string; 
    @Column()
    task_description!: string  
    @Column()
    trainer_id!: number;
    @Column()
    deadline!: Date;
}
