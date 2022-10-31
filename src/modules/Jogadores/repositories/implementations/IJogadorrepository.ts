import { ICreateJogadorDTO } from '../../../../dtos/ICreateJogadorDTO';
import { Jogador } from '../../entities/jogador';

interface IJogadorRepository {
  create(data: ICreateJogadorDTO): Promise<Jogador>;
  findById(id: string): Promise<Jogador>;
 
}

export { IJogadorRepository };
