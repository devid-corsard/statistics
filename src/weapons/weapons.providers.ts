import { DataSource } from 'typeorm';
import { Weapon } from './entities/weapon.entity';
import { DATA_SOURCE, WEAPONS_REPOSITORY } from '../app.constants';

export const weaponProviders = [
    {
        provide: WEAPONS_REPOSITORY,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Weapon),
        inject: [DATA_SOURCE],
    },
];
