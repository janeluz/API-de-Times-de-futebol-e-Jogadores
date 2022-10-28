import { Repository } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { ICreateTimeDTO } from "../../../dtos/ICreateTimeDTO";
import { Time } from "../../entities/time";
import { ITimeRepository } from "../ITimeRepository";

class TimeRepository implements ITimeRepository {
  private repository: Repository<Time>;

  constructor() {
    this.repository = AppDataSource.getRepository(Time);
  }

  async create({ name,coach,stadium,city  }: ICreateTimeDTO): Promise<void> {
    const time = this.repository.create({
      name,
      coach,
      stadium,
      city
    });
    await this.repository.save(time);
  }
  async findByName(name: string): Promise<Time> {
    const time = await this.repository.findOneBy({ name });
    return time;
  }
 
  }


export { TimeRepository };