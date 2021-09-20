const { getJSONData } = require('../controllers/download.controllers');

const router = require('express').Router();

router.get('/descargas/json/:id', getJSONData);

module.exports=router;