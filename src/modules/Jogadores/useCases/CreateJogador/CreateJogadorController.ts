import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateJogadorUseCase } from './CreateJojadorUsecase';

class CreateJogadorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, team_id, age, position, goals } = request.body;

    const createJogadorUseCase = container.resolve(CreateJogadorUseCase);

    const jogador = await createJogadorUseCase.execute({
      name,
      team_id,
      age,
      position,
      goals,
    });

    return response.status(201).json(jogador);
  }
}
export { CreateJogadorController };
