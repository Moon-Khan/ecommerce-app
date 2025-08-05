const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const loadRoutes = require('./routes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

loadRoutes(app);

Sequelize.sync({alter: true}).then(()=>{
    console.log("Database synced")
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
}).catch((err) => console.log('Failed to sync database',err))
