const express = require('express');
const app =express();

//static files
app.use(express.static(__dirname+'/public/www'));
app.listen(3000, () =>{
    console.log('server on port 3000');
})