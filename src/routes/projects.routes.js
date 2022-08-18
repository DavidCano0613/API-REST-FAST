import express from 'express'
import { getProject , createProject, updateProject, deleteProject, getOneProject, getProjectTask} from '../controllers/projectsController.js'

const projectsRouter = express.Router();

projectsRouter.get('/projects',getProject);
projectsRouter.get('/projects/:id',getOneProject);
projectsRouter.get('/projects/:id/tasks',getProjectTask);
projectsRouter.post('/projects',createProject);
projectsRouter.put('/projects/:id',updateProject);
projectsRouter.delete('/projects/:id',deleteProject);

export default projectsRouter;