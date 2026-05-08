import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';
import { projectRouter } from './module/project/project.route';
const app: Application = express();

// Middlewares
app.use(cors(
  {
    origin: true,
    credentials: true
  }
));

app.use(express.json());

app.use('/projects', projectRouter);

// Basic Route
app.get('/', (req: Request, res: Response) => {
  res.send('Portfolio Backend is running at 5000');
});

export default app;
