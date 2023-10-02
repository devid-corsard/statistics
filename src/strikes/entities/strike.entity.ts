import { Weapon } from '../../weapons/entities/weapon.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Strike {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Weapon, (w) => w.id)
    name: string;

    @Column('date')
    date: string;

    @Column('int')
    launched_count: number;

    @Column('int')
    intercepted: number;
}
