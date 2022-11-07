import { Router } from 'express';
import { CreateTeamController } from '../useCases/CreateTime/CreateTeamController';

import { ListAllController } from '../useCases/ListAll/listAllController';
import { ListByNameController } from '../useCases/ListByName.ts/listByNameController';

const teamsRoutes = Router();

const createTeamController = new CreateTeamController();

const listAllController = new ListAllController();

const listByNameController = new ListByNameController();


teamsRoutes.post('/', createTeamController.handle);
teamsRoutes.get('/', listAllController.handle);
teamsRoutes.get('/name', listByNameController.handle);

export { teamsRoutes };
