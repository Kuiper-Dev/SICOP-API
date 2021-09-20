const router = require('express').Router();
const procedimientoCtrl = require('../controllers/procedimientos.controllers');

//Routes
router.get('/procedimientos',procedimientoCtrl.getTipoProcedimiento);

module.exports=router;