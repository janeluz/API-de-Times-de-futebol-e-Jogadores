// import { inject, injectable } from "tsyringe";
// import { Jogador } from "../../entities/jogador";
// import { IJogadorRepository } from "../../repositories/implementations/IJogadorRepository";


// @injectable()
// class ListByPositionUseCase {
//   constructor(
//     @inject('JogadorRepository')
//     private jogadorRepository : IJogadorRepository
//   ){}
//    async execute(position:string):Promise<Jogador[]>{
    
//     const jogadores = await this.jogadorRepository.findByPosition(position);
//     return jogadores;
//    }
    
//   }

// export { ListByPositionUseCase };