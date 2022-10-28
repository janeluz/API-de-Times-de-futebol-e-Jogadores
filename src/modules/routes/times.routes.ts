import { Router } from "express";
import { CreateTimeController } from "../useCases/CreateTimeUseCase";


const timesRoutes = Router();

const createTimeController = new CreateTimeController();

timesRoutes.post('/', createTimeController.handle);


export { timesRoutes };

