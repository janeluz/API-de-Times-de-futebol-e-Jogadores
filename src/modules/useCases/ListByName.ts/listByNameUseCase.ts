import { inject, injectable } from "tsyringe";
import { ICreateTimeDTO } from "../../../dtos/ICreateTimeDTO";
import { Time } from "../../entities/time";
import { ITimeRepository } from "../../repositories/ITimeRepository";


interface IRequest {
  name: string;
}

@injectable()
class ListByNameUseCase {
  constructor(
    @inject('TimeRepository')
    private timeRepository: ITimeRepository){}
      async execute({name} : IRequest) : Promise<Time> {
    const time = await this.timeRepository.findByName(name)
    return time;

    }
  }
  export { ListByNameUseCase};

