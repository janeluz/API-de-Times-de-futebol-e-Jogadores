import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTimeUseCase } from "./CreateTimeController";


class CreateTimeController {
  
    async handle(request: Request, response: Response) {
  
    const { name,coach,stadium,city} = request.body;

    const createTimeUseCase = container.resolve(CreateTimeUseCase);

    await createTimeUseCase.excute({ name, coach,stadium,city});

    return response.status(201).send();


  }
}

export{ CreateTimeController };
