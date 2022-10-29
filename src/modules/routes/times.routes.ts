import { Router } from 'express';
import { CreateTeamController } from '../useCases/CreateTime/CreateTeamUseCase';

import { ListAllController } from '../useCases/ListAll/listAllController';
import { ListByNameController } from '../useCases/ListByName.ts/listByNameController';

const timesRoutes = Router();

const createTeamController = new CreateTeamController();

const listAllController = new ListAllController();

const listByNameController = new ListByNameController();


timesRoutes.post('/', createTeamController.handle);
timesRoutes.get('/', listAllController.handle);
timesRoutes.get('/name', listByNameController.handle);

export { timesRoutes };
