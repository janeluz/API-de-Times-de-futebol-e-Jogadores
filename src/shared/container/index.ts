import { container } from 'tsyringe';
import { IJogadorRepository } from '../../modules/Jogadores/repositories/implementations/IJogadorRepository';
import { JogadorRepository } from '../../modules/Jogadores/repositories/JogadorRepository';
import { TeamRepository } from '../../modules/repositories/implementations/TimeRepository';
import { ITeamRepository } from '../../modules/repositories/ITimeRepository';


container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository);

container.registerSingleton<IJogadorRepository>(
  'JogadorRepository',
  JogadorRepository,
);
