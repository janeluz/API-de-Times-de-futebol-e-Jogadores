import { openDb } from "./configDB";
import express  from "express"
import 'reflect-metadata';
import { timesRoutes } from "./modules/routes/times.routes";
import './shared/container';
import { jogadoresRoutes } from "./modules/routes/jogadores.routes";

const app = express();

app.use(express.json());
app.use('/times',timesRoutes);
app.use('/jogadores',jogadoresRoutes);

// openDb();

app.listen(3232, () => console.log('server is running!'))
