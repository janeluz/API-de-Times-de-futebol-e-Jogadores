import { inject, injectable } from 'tsyringe';
import { ICreateTimeDTO } from '../../../dtos/ICreateTimeDTO';
import { AppError } from '../../../errors/AppError';
import { ITeamRepository } from '../../repositories/ITimeRepository';


@injectable()
class CreateTeamUseCase {
  constructor(
    @inject('TeamRepository')
    private teamRepository: ITeamRepository,
  ) {}

  async excute({ name, coach, stadium, city }: ICreateTimeDTO): Promise<void> {
    const timeAlreadyExists = await this.teamRepository.findByName(name);

    if (timeAlreadyExists) {
      throw new AppError('Team Already exists');
    }

    this.teamRepository.create({
      name,
      coach,
      stadium,
      city,
    });
  }
}

export { CreateTeamUseCase };