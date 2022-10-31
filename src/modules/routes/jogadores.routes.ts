import { Router } from 'express';
import { CreateJogadorController } from '../Jogadores/useCases/CreateJogador/CreateJogadorController';
import { ListByIdController } from '../Jogadores/useCases/ListById/ListByIdController';

const jogadoresRoutes = Router();

const createJogadorController = new CreateJogadorController();

const listByIdController = new ListByIdController();

jogadoresRoutes.post('/', createJogadorController.handle);
jogadoresRoutes.get('/:id', listByIdController.handle);

export { jogadoresRoutes };
