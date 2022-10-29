import { ICreateJogadorDTO } from '../../../../dtos/ICreateJogadorDTO';
import { Jogador } from '../../entities/jogador';

interface IJogadorRepository {
  create(data: ICreateJogadorDTO): Promise<void>;
  findById(id: string): Promise<Jogador>;
  findByPosition(position: string): Promise<Jogador[]>;
}

export { IJogadorRepository };
