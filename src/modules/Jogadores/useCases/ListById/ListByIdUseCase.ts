import { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
import { Jogador } from "../../entities/jogador";
import { IJogadorRepository } from "../../repositories/implementations/IJogadorRepository";

@injectable()
class ListByIdUseCase {
  constructor(
    @inject('JogadorRepository')
    private jogadorRepository : IJogadorRepository
  ){}
   async execute(id:string):Promise<Jogador>{
    
    const jogador = await this.jogadorRepository.findById(id);
    return jogador;
   }
    
  }

export { ListByIdUseCase };
