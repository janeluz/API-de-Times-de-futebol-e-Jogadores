import { container } from "tsyringe";
import { TimeRepository } from "../../modules/repositories/implementations/TimeRepository";
import { ITimeRepository } from "../../modules/repositories/ITimeRepository";


container.registerSingleton<ITimeRepository>(
  ' TimeRepository ',
  TimeRepository,
);