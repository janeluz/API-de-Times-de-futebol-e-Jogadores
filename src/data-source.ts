import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { openDb } from './configDB';
import { CreateTime1666912053575 } from './migrations/1666912053575-CreateTime';
import { Time } from './modules/entities/time';

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: './server.sqlite',
  synchronize: true,
  logging: false,
  entities: [Time],
  migrations: [CreateTime1666912053575],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    openDb();
  })
  .catch(error => console.log(error));
 
  
  