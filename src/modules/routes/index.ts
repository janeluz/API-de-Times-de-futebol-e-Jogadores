import { Router } from "express";
import { jogadoresRoutes } from "./jogadores.routes";
import { timesRoutes } from "./times.routes";


const router = Router();

router.use('/times', timesRoutes);
router.use('/jogadores', jogadoresRoutes);


export{ router};
