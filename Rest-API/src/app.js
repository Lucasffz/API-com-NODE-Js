'use strict';
const express = require('express');
// Instancia uma aplicação express
const app = express();

const router = express.Router()


const route = router.get('/', (req,res,next) => {
    res.status(200).send({
        title: 'REST api',
        version: '0.1'
    });
});

app.use('/', route);

module.exports = app;