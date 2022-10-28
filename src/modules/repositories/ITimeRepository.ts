import { ICreateTimeDTO } from "../../dtos/ICreateTimeDTO";
import { Time } from "../entities/time";



interface ITimeRepository {
  create(data: ICreateTimeDTO): void;
  findByName(name: string): Promise<Time>;
  listAll(): Promise<Time[]>;

}

export { ITimeRepository} ;