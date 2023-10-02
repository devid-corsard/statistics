import { DATA_SOURCE } from '../app.constants';
import { DataSource } from 'typeorm';

export const dbProviders = [
    {
        provide: DATA_SOURCE,
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'daddy',
                password: 'daddyshome',
                database: 'statistic',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
