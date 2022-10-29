import { Router } from 'express';
import { CreateJogadorController } from '../Jogadores/useCases/CreateJogador/CreateJogadorController';
import { ListByIdController } from '../Jogadores/useCases/ListById/ListByIdController';
import { ListByPositionController } from '../Jogadores/useCases/ListByPosition/ListByPositionController';


const jogadoresRoutes = Router();

const createJogadorController = new CreateJogadorController();

const listByIdController = new ListByIdController();

const listByPositionController = new ListByPositionController();


jogadoresRoutes.post('/', createJogadorController.handle);
jogadoresRoutes.get('/', listByIdController.handle);
jogadoresRoutes.get('/:id', listByIdController.handle);
jogadoresRoutes.get('/position', listByPositionController.handle);


export { jogadoresRoutes };
