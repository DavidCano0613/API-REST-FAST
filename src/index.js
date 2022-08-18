import app from './app.js';
import { sequelize } from './database/database.js';
// import './models/Project.js';
// import './models/Task.js';

const checkConnection = async () => {
  try {
    await sequelize.sync({ force: false });
    // await sequelize.authenticate();
    app.listen(4000)
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkConnection();


