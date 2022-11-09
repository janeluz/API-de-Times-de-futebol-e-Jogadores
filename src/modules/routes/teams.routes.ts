import { Router } from 'express';
import { CreateTeamController } from '../team/useCases/CreateTeam/CreateTeamController';
import { ListAllController } from '../team/useCases/ListAll/ListAllController';
import { ListByNameController } from '../team/useCases/ListByName.ts/listByNameController';

const teamsRoutes = Router();

const createTeamController = new CreateTeamController();

const listAllController = new ListAllController();

const listByNameController = new ListByNameController();

teamsRoutes.post('/', createTeamController.handle);
teamsRoutes.get('/', listAllController.handle);
teamsRoutes.get('/name', listByNameController.handle);

export { teamsRoutes };
