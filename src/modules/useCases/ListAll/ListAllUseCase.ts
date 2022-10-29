import { inject, injectable } from 'tsyringe';
import { Team } from '../../entities/time';
import { ITeamRepository } from '../../repositories/ITimeRepository';


@injectable()
class ListAllUseCase {
  constructor(
    @inject('TeamRepository')
    private teamRepository: ITeamRepository,
  ) {}
  async execute(): Promise<Team[]> {
    const teams = await this.teamRepository.listAll();
    return teams;
  }
}

export { ListAllUseCase };
