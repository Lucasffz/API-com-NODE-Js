'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routers/index');
const contato = require('./routers/contatos');


// Instancia uma aplicação express

const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

app.use('/', index);
app.use('/contatos', contato);



module.exports = app;
