import { ICreateTimeDTO } from '../../dtos/ICreateTimeDTO';
import { Team } from '../entities/time';


interface ITeamRepository {
  create(data: ICreateTimeDTO): void;
  findByName(name: string): Promise<Team>;
  listAll(): Promise<Team[]>;
  
}

export { ITeamRepository };
