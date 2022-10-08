const express = require('express');
const router = express.Router();
const db = require('./dbQuery');
const controller = require('./controller/controller');
router.post('/',controller.messageHandle);//since we provided base api, don't need to write api here

module.exports=router;

