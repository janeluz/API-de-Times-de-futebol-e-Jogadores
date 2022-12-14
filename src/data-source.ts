import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { openDb } from './configDB';
import { CreateTeam1667078172975 } from './migrations/1667078172975-CreateTeam';
import { CreatePlayer1667080250237 } from './migrations/1667080250237-CreateJogador';
import { Player } from './modules/Player/entities/player';
import { Team } from './modules/team/entities/team';

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: './server.sqlite',
  synchronize: true,
  logging: false,
  entities: [Team, Player],
  migrations: [CreateTeam1667078172975, CreatePlayer1667080250237],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    openDb();
  })
  .catch(error => console.log(error));
