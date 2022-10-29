
import { Request, Response } from "express";
import { container } from "tsyringe";
import { Jogador } from "../../entities/jogador";
import { ListByIdUseCase } from "./ListByIdUseCase";


class ListByIdController {
  async handle(request: Request, response: Response): Promise<Jogador> {
    const {id} = request.params;

    const listByIdUseCase = container.resolve(ListByIdUseCase);

     const jogador = await listByIdUseCase.execute(id);

    return jogador;
  }
}

export{ ListByIdController };