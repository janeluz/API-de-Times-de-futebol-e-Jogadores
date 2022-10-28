import { inject, injectable } from 'tsyringe';
import { ICreateTimeDTO } from '../../../dtos/ICreateTimeDTO';
import { ITimeRepository } from '../../repositories/ITimeRepository';

@injectable()
class CreateTimeUseCase {
  constructor(
    @inject('TimeRepository')
    private timesRepository: ITimeRepository,
  ) {}

  async excute({ name, coach, stadium, city }: ICreateTimeDTO): Promise<void> {
    const timeAlreadyExists = await this.timesRepository.findByName(name);

    if (timeAlreadyExists) {
      throw new Error('User Already exists');
    }

    this.timesRepository.create({
      name,
      coach,
      stadium,
      city,
    });
  }
}

export { CreateTimeUseCase };
