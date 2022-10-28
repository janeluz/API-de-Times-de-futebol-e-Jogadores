import { Router } from "express";
import { timesRoutes } from "./times.routes";


const router = Router();

router.use('/times', timesRoutes);




export{ Router};
