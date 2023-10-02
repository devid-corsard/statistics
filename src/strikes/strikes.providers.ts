import { DataSource } from 'typeorm';
import { Strike } from './entities/strike.entity';
import { DATA_SOURCE, STRIKES_REPOSITORY } from '../app.constants';

export const strikesProviders = [
    {
        provide: STRIKES_REPOSITORY,
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Strike),
        inject: [DATA_SOURCE],
    },
];
