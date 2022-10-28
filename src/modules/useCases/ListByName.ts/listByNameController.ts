import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListByNameUseCase } from "./listByNameUseCase";


class ListByNameController {
  async handle(request: Request, response: Response):Promise <Response> {

  const { name } = request.query;

    const listByNameUseCase = container.resolve(ListByNameUseCase);

    const timeName = await listByNameUseCase.execute({name: name as string});

    return response.json(timeName);
  }
}

export { ListByNameController };