import express from 'express';
import projectsRouter from './routes/projects.routes.js';
import taskRouter from './routes/task.routes.js';
const app = express();
app.use(express.json());
app.use(projectsRouter);
app.use(taskRouter)
export default app; 

