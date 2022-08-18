import {Project} from '../models/Project.js';        
import {Task} from '../models/Task.js'

export const getProject = async (req,res) => { 
    try{
        const rta = await Project.findAll()
        res.json(rta);
    } catch(error){
        res.status(500).json("Error en el servidor");
    }
}
        
export const getOneProject = async (req,res)=>{
    const {id} = req.params
    const user = await Project.findByPk(id);
    res.status(200).json(user);
}

export const createProject = async (req,res) => {
    try{
        const {name,priority,description} = req.body;
        const newProject = await Project.create({
            name,
            description,
            priority
        })
        res.json(newProject);
    } catch{
        res.status(500).json("Error en el servidor");
    }  
}
        
export const updateProject = async (req,res)=> {
    try{
    const { id } = req.params
    const { name, priority, description } = req.body;
    const userUpdated = await Project.findByPk(id);
    userUpdated.name= name
    userUpdated.priority= priority
    userUpdated.description= description
    await userUpdated.save();
    res.status(201).json(userUpdated)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
       
export const deleteProject = async (req,res)=> {
    try{
    const {id} = req.params
    res.json(id)
    const deleteProject = await Project.destroy({where:{
        id:id
    }})
    res.sendStatus(204).json(deleteProject)
    } 
    catch(error){
        res.status(500).json("Error en el servidor")
    }
}

export const getProjectTask = async (req,res)=>{
    const{id} = req.params
    const tasks = await Task.findAll({
        where:{projectId:id}
    })
    res.json(tasks)
}
         
 
    
    
    
