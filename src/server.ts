import { openDb } from "./configDB";
import express  from "express"
import 'reflect-metadata';

const app = express();

app.use(express.json());

// openDb();

app.listen(3232, () => console.log('server is running!'))
