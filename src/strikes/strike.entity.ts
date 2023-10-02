import { Weapon } from '../weapons/weapon.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Strike {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('date')
    date: string;

    @Column('int')
    launched_count: number;

    @Column('int', { nullable: true, default: 0 })
    intercepted: number;

    @ManyToOne(() => Weapon, (w) => w.strikes)
    weapon: Weapon;
}
