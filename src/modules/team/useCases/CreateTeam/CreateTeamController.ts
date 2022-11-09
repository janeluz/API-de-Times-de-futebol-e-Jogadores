import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTeamUseCase } from './CreateTeamUseCase';


class CreateTeamController {
  async handle(request: Request, response: Response) {
    const { name, coach, stadium, city } = request.body;

    const createTeamUseCase = container.resolve(CreateTeamUseCase);

    await createTeamUseCase.excute({ name, coach, stadium, city });

    return response.status(201).send();
  }
}

export { CreateTeamController };
