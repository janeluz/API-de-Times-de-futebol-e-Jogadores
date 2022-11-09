import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllUseCase } from "./listAllUseCase";



class ListAllController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllUseCase = container.resolve(ListAllUseCase);

    const all = await listAllUseCase.execute();

    return response.json(all);
  }
}

export { ListAllController };