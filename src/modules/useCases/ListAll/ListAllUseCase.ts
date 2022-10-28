import { inject, injectable } from "tsyringe";
import { Time } from "../../entities/time";
import { ITimeRepository } from "../../repositories/ITimeRepository";

@injectable()
class ListAllUseCase {
constructor(
  @inject('TimeRepository')
  private timeRepository: ITimeRepository,
){}
  async execute(): Promise<Time[]> {
    const times = await this.timeRepository.listAll();
    return times;
  }
}



export { ListAllUseCase };
