import {sequelize} from '../database/database.js';
import {DataTypes} from 'sequelize';

export const Task = sequelize.define('task',{
    id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncremnete:true,
  },
  name:{
    type: DataTypes.INTEGER,
  },
  done:{
    type: DataTypes.STRING,
    defaultValue: false,
  },
},{
    timestamps:false,
});

