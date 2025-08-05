const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = express.router();
const controller = require('./controllers/productController')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

router.get('/',controller)
module.exports = { path: '/products', router };
