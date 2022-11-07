import { ICreateTeamDTO } from '../../dtos/ICreateTeamDTO';
import { Team } from '../entities/team';

interface ITeamRepository {
  create(data: ICreateTeamDTO): void;
  findByName(name: string): Promise<Team>;
  listAll(): Promise<Team[]>;
}

export { ITeamRepository };
