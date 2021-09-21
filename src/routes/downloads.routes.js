const router = require('express').Router();
const downloadCtrl = require('../controllers/downloads.controllers')
module.exports=router;

router.get('/descargas/json/:id', downloadCtrl.getJSONData);