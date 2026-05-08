import express, {} from 'express';
import cors from 'cors';
import { projectRouter } from './module/project/project.route';
const app = express();
// Middlewares
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use('/projects', projectRouter);
// Basic Route
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running at 5000');
});
export default app;
//# sourceMappingURL=app.js.map