import { Repository } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import { ICreatePlayerDTO } from '../../../dtos/ICreatePlayerDTO';
import { Player } from '../entities/player';
import { IPlayerRepository } from './implementations/IPlayerRepository';

interface IRequest {
  position: string;
}

class PlayerRepository implements IPlayerRepository {
  private repository: Repository<Player>;

  constructor() {
    this.repository = AppDataSource.getRepository(Player);
  }

  async create({
    name,
    team_id,
    age,
    position,
    goals,
  }: ICreatePlayerDTO): Promise<Player> {
    const player = this.repository.create({
      name,
      team_id,
      age,
      position,
      goals,
    });

    await this.repository.save(player);
    return player;
  }
  async findById(id: string): Promise<Player> {
    const player = await this.repository.findOneBy({ id });

    return player;
  }
}

export { PlayerRepository };
