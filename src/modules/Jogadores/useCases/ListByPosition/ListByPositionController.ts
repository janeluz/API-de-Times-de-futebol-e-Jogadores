import { Request, Response } from "express";
import { container } from "tsyringe";
import { Jogador } from "../../entities/jogador";
import { ListByPositionUseCase } from "./ListByPositionUseCase";



class ListByPositionController {
  async handle(request: Request, response: Response): Promise<Jogador[]> {
    
    const {position}= request.query;
    const listByPositionUseCase = container.resolve(ListByPositionUseCase);

     const jogador = await listByPositionUseCase.execute(position as any);

    return  jogador;
  }
}

export{ ListByPositionController };