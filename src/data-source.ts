import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { openDb } from './configDB';
import { CreateTime1666912053575 } from './migrations/1666912053575-CreateTime';
import { CreateJogador1666964806802 } from './migrations/1666964806802-CreateJogador';
import { Time } from './modules/entities/time';
import { Jogador } from './modules/Jogadores/entities/jogador';

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: './server.sqlite',
  synchronize: true,
  logging: false,
  entities: [Time, Jogador],
  migrations: [CreateTime1666912053575, CreateJogador1666964806802],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    openDb();
  })
  .catch(error => console.log(error));
