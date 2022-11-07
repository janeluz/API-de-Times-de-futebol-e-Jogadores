import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListByIdUseCase } from './ListByIdUseCase';

class ListByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listByIdUseCase = container.resolve(ListByIdUseCase);

    const jogador = await listByIdUseCase.execute(id);

    return response.json(jogador);
  }
}

export { ListByIdController };
