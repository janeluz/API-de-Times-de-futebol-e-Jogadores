import { container } from 'tsyringe';
import { IJogadorRepository } from '../../modules/Jogadores/repositories/implementations/IJogadorRepository';
import { JogadorRepository } from '../../modules/Jogadores/repositories/JogadorRepository';
import { TimeRepository } from '../../modules/repositories/implementations/TimeRepository';
import { ITimeRepository } from '../../modules/repositories/ITimeRepository';

container.registerSingleton<ITimeRepository>('TimeRepository', TimeRepository);

container.registerSingleton<IJogadorRepository>(
  'JogadorRepository',
  JogadorRepository,
);
