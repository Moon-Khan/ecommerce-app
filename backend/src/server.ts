import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './config/sequelize';
import initializeRoutes from './routes/index';

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

initializeRoutes(app);

sequelize.sync({alter: true}).then(()=>{
    console.log("Database synced")
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
}).catch((err) => console.log('Failed to sync database',err))
