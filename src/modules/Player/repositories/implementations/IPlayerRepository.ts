import { ICreatePlayerDTO } from '../../../../dtos/ICreatePlayerDTO';
import { Player } from '../../entities/player';

interface IPlayerRepository {
  create(data: ICreatePlayerDTO): Promise<Player>;
  findById(id: string): Promise<Player>;
}

export { IPlayerRepository };
