const express = require('express');
const procedimientosRoutes = require('./routes/procedimientos.routes')
const app= express();
let port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Hello There!');
});


app.use(procedimientosRoutes);
app.listen(port, ()=>{
    console.log(`Server on port ${port}`);
});
