import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../data-source';
import { ICreateTeamDTO } from '../../../../dtos/ICreateTeamDTO';

import { Team } from '../../entities/team';
import { ITeamRepository } from '../ITeamRepository';

class TeamRepository implements ITeamRepository {
  private repository: Repository<Team>;

  constructor() {
    this.repository = AppDataSource.getRepository(Team);
  }

  async create({ name, coach, stadium, city }: ICreateTeamDTO): Promise<void> {
    const team = this.repository.create({
      name,
      coach,
      stadium,
      city,
    });
    await this.repository.save(team);
  }
  async findByName(name: string): Promise<Team> {
    const team = await this.repository.findOne({
      relations: ['players'],
      where: {
        name: name,
      },
    });
    return team;
  }

  async listAll(): Promise<Team[]> {
    const teams = await this.repository.find();
    return teams;
  }
}

export { TeamRepository };
