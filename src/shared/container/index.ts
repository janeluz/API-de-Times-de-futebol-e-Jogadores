import { container } from 'tsyringe';
import { IPlayerRepository } from '../../modules/Jogadores/repositories/implementations/IPlayerRepository';
import { PlayerRepository } from '../../modules/Jogadores/repositories/PlayerRepository';

import { TeamRepository } from '../../modules/repositories/implementations/TeamRepository';
import { ITeamRepository } from '../../modules/repositories/ITeamRepository';

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository);

container.registerSingleton<IPlayerRepository>(
  'PlayerRepository',
  PlayerRepository,
);
