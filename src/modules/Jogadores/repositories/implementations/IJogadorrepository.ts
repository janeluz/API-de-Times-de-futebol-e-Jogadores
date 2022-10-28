import { ICreateJogadorDTO } from '../../../../dtos/ICreateJogadorDTO';

interface IJogadorRepository {
  create(data: ICreateJogadorDTO): void;
}

export { IJogadorRepository };
