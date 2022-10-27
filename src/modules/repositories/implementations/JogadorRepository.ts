// import { Repository } from "typeorm";
// import { AppDataSource } from "../../../data-source";
// import { ICreateJogadorDTO } from "../../../dtos/ICreateJogadorDTO";
// import { Jogador } from "../../entities/jogador";
// import { IJogadorRepository } from "../IJogadorrepository";

// class JogadorRepository implements IJogadorRepository {
//   private repository: Repository<Jogador>;

//   constructor() {
//     this.repository = AppDataSource.getRepository(Jogador);
//   }

//   async create({  }: ICreateJogadorDTO): Promise<void> {
//     const jogador = this.repository.create({
      
//     });
//     await this.repository.save(jogador);
//   }

 
//   }


// export { JogadorRepository };