import { Request, Response } from 'express';
import { container, inject, injectable } from 'tsyringe';
import { Player } from '../../entities/player';
import { IPlayerRepository } from '../../repositories/implementations/IPlayerRepository';
@injectable()
class ListByIdUseCase {
  constructor(
    @inject('PlayerRepository')
    private playerRepository: IPlayerRepository,
  ) {}
  async execute(id: string): Promise<Player> {
    const player = await this.playerRepository.findById(id);

    return player;
  }
}

export { ListByIdUseCase };
