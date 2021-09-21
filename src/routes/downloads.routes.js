const router = require('express').Router();

module.exports=router;

router.get('/descargas/json/:id', (req, res)=>{
    res.send('Descargando archivo');
});