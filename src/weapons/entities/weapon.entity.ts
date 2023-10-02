import { Strike } from '../../strikes/entities/strike.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Weapon {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ type: 'int', nullable: true })
    range_km: number;

    @OneToMany(() => Strike, (s) => s.launched_count)
    launched_all: number[];

    @OneToMany(() => Strike, (s) => s.intercepted)
    intercepted_all: number[];

    @OneToMany(() => Strike, (s) => s.date)
    dates: string[];
}
