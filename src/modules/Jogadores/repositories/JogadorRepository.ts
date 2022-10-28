import { Repository } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import { ICreateJogadorDTO } from '../../../dtos/ICreateJogadorDTO';
import { Jogador } from '../entities/jogador';
import { IJogadorRepository } from './implementations/IJogadorrepository';

class JogadorRepository implements IJogadorRepository {
  private repository: Repository<Jogador>;

  constructor() {
    this.repository = AppDataSource.getRepository(Jogador);
  }

  async create({
    name,
    team_id,
    age,
    position,
    goals,
  }: ICreateJogadorDTO): Promise<void> {
    const jogador = this.repository.create({
      name,
      team_id,
      age,
      position,
      goals,
    });
    await this.repository.save(jogador);
  }
}

export { JogadorRepository };
