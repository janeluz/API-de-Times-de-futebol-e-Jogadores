import { openDb } from "./configDB";
import express  from "express"
import 'reflect-metadata';
import { timesRoutes } from "./modules/routes/times.routes";
import './shared/container';

const app = express();

app.use(express.json());
app.use("/times",timesRoutes);

// openDb();

app.listen(3232, () => console.log('server is running!'))
