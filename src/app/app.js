const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require ('../config/config');
const procedimientosRoutes = require('../controllers/procedimientos.controllers');
const jsonRoutes= require ('../routes/json.routes');

const app = express();
let port;
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());


//routes
app.use(require('../routes/json.routes'));


module.exports =app;