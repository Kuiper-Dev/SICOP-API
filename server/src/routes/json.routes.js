const {Router}= require('express');
const {getJSONData} = require ('../controllers/json.download.controllers');
const router= Router();
router.get('/descargas/json/:id',getJSONData);


router.get('/', (req, res)=>{
    res.json({
        "Nombre":" Alfredo",
        "Apellido": "Marrero"
    });
});

module.exports = router;