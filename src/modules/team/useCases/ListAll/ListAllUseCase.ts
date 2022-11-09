import { inject, injectable } from 'tsyringe';
import { Team } from '../../entities/team';
import { ITeamRepository } from '../../repositories/ITeamRepository';

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
