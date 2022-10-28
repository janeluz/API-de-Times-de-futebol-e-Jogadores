import { Router } from 'express';
import { CreateTimeController } from '../useCases/CreateTime/CreateTimeUseCase';
import { ListAllController } from '../useCases/ListAll/listAllController';

const timesRoutes = Router();

const createTimeController = new CreateTimeController();
const listAllController = new ListAllController();

timesRoutes.post('/', createTimeController.handle);
timesRoutes.get('/', listAllController.handle);

export { timesRoutes };
