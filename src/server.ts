import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { teamsRoutes} from './modules/routes/teams.routes';
import './shared/container';

import { AppError } from './errors/AppError';
import { playersRoutes } from './modules/routes/players.routes';

const app = express();

app.use(express.json());
app.use('/teams', teamsRoutes);
app.use('/players', playersRoutes);

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

app.listen(3232, () => console.log('server is running!'));
