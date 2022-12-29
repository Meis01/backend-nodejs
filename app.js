var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser")
const fs = require('fs');


var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var categoryRouter = require('./routes/category');
//var itemsRouter = require('./routes/items');

var app = express();

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//We set up body-parser to handle JSON data from our body to the express API we create.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/category', categoryRouter);
//app.use('/items', itemsRouter);

module.exports = app;
