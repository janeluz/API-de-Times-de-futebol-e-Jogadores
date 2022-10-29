import { inject, injectable } from 'tsyringe';
import { ICreateJogadorDTO } from '../../../../dtos/ICreateJogadorDTO';
import { AppError } from '../../../../errors/AppError';
import { Jogador } from '../../entities/jogador';
import { IJogadorRepository } from '../../repositories/implementations/IJogadorRepository';

@injectable()
class CreateJogadorUseCase {
  constructor(
    @inject('JogadorRepository')
    private jogadorRepository: IJogadorRepository,
  ) {}

  async execute({
    name,
    team_id,
    age,
    position,
    goals,
    id,
  }: ICreateJogadorDTO): Promise<void> {
    const jogadorAlreadyExists = await this.jogadorRepository.findById(id);

    if (jogadorAlreadyExists) {
      throw new AppError('Jogador already exists!');
    }
    await this.jogadorRepository.create({
      name,
      team_id,
      age,
      position,
      goals,
      id,
    });
  }
}

export { CreateJogadorUseCase };
