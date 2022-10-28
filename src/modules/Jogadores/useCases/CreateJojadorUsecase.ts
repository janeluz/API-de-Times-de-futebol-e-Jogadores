import { inject, injectable } from 'tsyringe';
import { ICreateJogadorDTO } from '../../../dtos/ICreateJogadorDTO';
import { Jogador } from '../entities/jogador';
import { IJogadorRepository } from '../repositories/implementations/IJogadorRepository';

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
  }: ICreateJogadorDTO): Promise<void> {
    const jogador = this.jogadorRepository.create({
      name,
      team_id,
      age,
      position,
      goals,
    });
    return jogador;
  }
}

export { CreateJogadorUseCase };
