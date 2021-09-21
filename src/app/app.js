const express= require('express');
const config = require ('../config/config');
const downloadsRoutes = require('../routes/downloads.routes');
const app = express();
let port = process.env.PORT || 3000;
app.set('port', config.port);

app.use(downloadsRoutes);
app.get('/', (req, res)=>{
    res.send('API Proyecto SICOP');

});
 module.exports=app;
