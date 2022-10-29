import { openDb } from "./configDB";
import express, { NextFunction, Request, Response }  from "express"
import 'reflect-metadata';
import { timesRoutes } from "./modules/routes/times.routes";
import './shared/container';
import { jogadoresRoutes } from "./modules/routes/jogadores.routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());
app.use('/times',timesRoutes);
app.use('/jogadores',jogadoresRoutes);


app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });

    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3232, () => console.log('server is running!'))
