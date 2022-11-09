import { inject, injectable } from 'tsyringe';
import { ICreatePlayerDTO } from '../../../../dtos/ICreatePlayerDTO';

import { AppError } from '../../../../errors/AppError';
import { Player } from '../../entities/player';
import { IPlayerRepository } from '../../repositories/implementations/IPlayerRepository';

@injectable()
class CreatePlayerUseCase {
  constructor(
    @inject('PlayerRepository')
    private playerRepository: IPlayerRepository,
  ) {}

  async execute({
    name,
    team_id,
    age,
    position,
    goals,
  }: ICreatePlayerDTO): Promise<Player> {
    // const jogadorAlreadyExists = await this.jogadorRepository.findById(id);
    // console.log(id,"teste1");
    // if (jogadorAlreadyExists) {
    //   throw new AppError('Jogador already exists!');
    // }
    const player = await this.playerRepository.create({
      name,
      team_id,
      age,
      position,
      goals,
    });

    return player;
  }
}

export { CreatePlayerUseCase };
