var express = require('express');
const controllers = require("../controllers/categoryController")
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.post('/createcategory', controllers.createCategory) 
router.get('/getall', controllers.getAllCategory) 


module.exports = router;
