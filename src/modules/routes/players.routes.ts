import { Router } from 'express';
import { CreatePlayerController } from '../Player/useCases/CreatePlayer/CreatePlayerController';
import { ListByIdController } from '../Player/useCases/ListById/ListByIdController';

const playersRoutes = Router();

const createPlayerController = new CreatePlayerController();

const listByIdController = new ListByIdController();

playersRoutes.post('/', createPlayerController.handle);
playersRoutes.get('/:id', listByIdController.handle);

export { playersRoutes };
