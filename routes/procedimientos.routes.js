const {getTipoProcedimientos} = require('../controllers/procedimientos.controllers')

const router = require('express').Router();

router.get('/procedimientos', getTipoProcedimientos);

module.exports=router;