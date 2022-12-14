import { inject, injectable } from 'tsyringe';
import { Team } from '../../entities/team';
import { ITeamRepository } from '../../repositories/ITeamRepository';

interface IRequest {
  name: string;
}

@injectable()
class ListByNameUseCase {
  constructor(
    @inject('TeamRepository')
    private teamRepository: ITeamRepository,
  ) {}
  async execute({ name }: IRequest): Promise<Team> {
    const time = await this.teamRepository.findByName(name);

    return time;
  }
}
export { ListByNameUseCase };
