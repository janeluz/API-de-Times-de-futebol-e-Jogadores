import { Router } from 'express';
import { CreateJogadorController } from '../Jogadores/useCases/CreateJogadorController';

const jogadoresRoutes = Router();

const createJogadorController = new CreateJogadorController();

jogadoresRoutes.post('/', createJogadorController.handle);

export { jogadoresRoutes };
