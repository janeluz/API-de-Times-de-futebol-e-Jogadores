import { Router } from 'express';
import { playersRoutes } from './players.routes';

import { teamsRoutes } from './teams.routes';

const router = Router();

router.use('/teams', teamsRoutes);
router.use('/players', playersRoutes);

export { router };
