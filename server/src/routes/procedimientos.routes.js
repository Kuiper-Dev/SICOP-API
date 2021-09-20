const router = require('express').Router();
const {getTipoProcedimiento} = require('../controllers/procedimientos.controllers');

//Routes
router.get('/procedimientos',getTipoProcedimiento);

module.exports=router;