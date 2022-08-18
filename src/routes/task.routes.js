import express from 'express';
import { getTasks,getTask,createTask,updateTask,deleteTask} from '../controllers/taskController.js';

const taskRouter = express.Router();

taskRouter.get('/tasks',getTasks)
taskRouter.get('/tasks/:id',getTask)
taskRouter.post('/tasks',createTask)
taskRouter.put('/tasks/:id',updateTask)
taskRouter.delete('/tasks/:id',deleteTask)

export default taskRouter;