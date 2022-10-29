import { Repository } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import { ICreateTimeDTO } from '../../../dtos/ICreateTimeDTO';
import { Team } from '../../entities/time';
import { ITeamRepository } from '../ITimeRepository';


class TeamRepository implements ITeamRepository {
  private repository: Repository<Team>;

  constructor() {
    this.repository = AppDataSource.getRepository(Team);
  }

  async create({ name, coach, stadium, city }: ICreateTimeDTO): Promise<void> {
    const team = this.repository.create({
      name,
      coach,
      stadium,
      city,
    });
    await this.repository.save(team);
  }
  async findByName(name: string): Promise<Team> {
    const team = await this.repository.findOneBy({ name });
    return team;
  }
  
  
  async listAll(): Promise<Team[]> {
    const teams = await this.repository.find();
    return teams;
  }
 
}

export { TeamRepository };
