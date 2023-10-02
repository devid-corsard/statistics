import { Strike } from '../strikes/strike.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Weapon {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ type: 'int', nullable: true })
    range_km: number;

    @OneToMany(() => Strike, (s) => s.weapon)
    strikes: Strike[];
}
