var express = require('express');
const controllers = require("../controllers/userController")
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.post('/signup', controllers.createUser) 
router.post('/login', controllers.getUser) 
router.get('/me', controllers.getUser)
router.delete('/delete/:id', controllers.deleteUser)
router.put('/update/:id',controllers.updateUser)

module.exports = router;
