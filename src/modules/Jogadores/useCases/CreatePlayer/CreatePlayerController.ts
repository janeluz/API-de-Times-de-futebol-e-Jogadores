import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePlayerUseCase } from './CreatePlayerUsecase';

class CreatePlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, team_id, age, position, goals } = request.body;

    const createPlayerUseCase = container.resolve(CreatePlayerUseCase);

    const player = await createPlayerUseCase.execute({
      name,
      team_id,
      age,
      position,
      goals,
    });

    return response.status(201).json(player);
  }
}
export { CreatePlayerController };
