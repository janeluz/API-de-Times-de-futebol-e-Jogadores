import { container } from 'tsyringe';
import { IPlayerRepository } from '../../modules/Player/repositories/implementations/IPlayerRepository';
import { PlayerRepository } from '../../modules/Player/repositories/PlayerRepository';
import { TeamRepository } from '../../modules/team/repositories/implementations/TeamRepository';
import { ITeamRepository } from '../../modules/team/repositories/ITeamRepository';

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository);

container.registerSingleton<IPlayerRepository>(
  'PlayerRepository',
  PlayerRepository,
);
