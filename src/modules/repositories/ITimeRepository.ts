import { ICreateTimeDTO } from "../../dtos/ICreateTimeDTO";



interface ITimeRepository {
  create({name,coach,stadium,city}: ICreateTimeDTO): void;
 

}

export { ITimeRepository} ;