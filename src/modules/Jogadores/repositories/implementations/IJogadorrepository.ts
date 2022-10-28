import { ICreateJogadorDTO } from '../../../../dtos/ICreateJogadorDTO';
import { Jogador } from '../../entities/jogador';

interface IJogadorRepository {
  create(data: ICreateJogadorDTO): Promise<void>;
}

export { IJogadorRepository };
