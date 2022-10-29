import { inject, injectable } from 'tsyringe';
import { ICreateJogadorDTO } from '../../../../dtos/ICreateJogadorDTO';
import { AppError } from '../../../../errors/AppError';
import { Jogador } from '../../entities/jogador';
import { IJogadorRepository } from '../../repositories/implementations/IJogadorRepository';



@injectable()
class CreateJogadorUseCase {
  constructor(
    @inject('JogadorRepository')
    private jogadorRepository: IJogadorRepository,
  ) {}

  async execute({
    
    name,
    team_id,
    age,
    position,
    goals,
    
  }: ICreateJogadorDTO): Promise<Jogador> {
    // const jogadorAlreadyExists = await this.jogadorRepository.findById(id);
    // console.log(id,"teste1");
    // if (jogadorAlreadyExists) {
    //   throw new AppError('Jogador already exists!');
    // }
     const jogador = await this.jogadorRepository.create({
      
      name,
      team_id,
      age,
      position,
      goals,
     
    });
    console.log(jogador,"teste2");
    return jogador;
   
  }
}

export { CreateJogadorUseCase };
