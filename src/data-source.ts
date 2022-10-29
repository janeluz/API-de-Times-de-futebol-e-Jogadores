import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { openDb } from './configDB';
import { CreateTeam1667078172975 } from './migrations/1667078172975-CreateTeam';
import { CreateJogador1667080250237 } from './migrations/1667080250237-CreateJogador';
import { Team } from './modules/entities/time';
import { Jogador } from './modules/Jogadores/entities/jogador';

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: './server.sqlite',
  synchronize: true,
  logging: false,
  entities: [Team, Jogador],
  migrations: [CreateTeam1667078172975,CreateJogador1667080250237 ],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    openDb();
  })
  .catch(error => console.log(error));
