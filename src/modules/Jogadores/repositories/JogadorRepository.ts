import { Repository } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import { ICreateJogadorDTO } from '../../../dtos/ICreateJogadorDTO';
import { Jogador } from '../entities/jogador';
import { IJogadorRepository } from './implementations/IJogadorRepository';

interface IRequest{
  position: string;
}

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
  async findById(id: string): Promise<Jogador> {
    const jogador = await this.repository.findOneBy({id});
    return jogador;
  }
async findByPosition(position:string): Promise<Jogador[]>{
const playsQuery = this.repository.createQueryBuilder('jogador').groupBy('jogador.position');

const query = await playsQuery.getMany();

return query;

}
}

export { JogadorRepository };
