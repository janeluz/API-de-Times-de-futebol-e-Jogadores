import { Router } from 'express';
import { CreateTimeController } from '../useCases/CreateTime/CreateTimeUseCase';
import { ListAllController } from '../useCases/ListAll/listAllController';
import { ListByNameController } from '../useCases/ListByName.ts/listByNameController';

const timesRoutes = Router();

const createTimeController = new CreateTimeController();

const listAllController = new ListAllController();

const listByNameController = new ListByNameController();


timesRoutes.post('/', createTimeController.handle);
timesRoutes.get('/', listAllController.handle);
timesRoutes.get('/name', listByNameController.handle);

export { timesRoutes };
