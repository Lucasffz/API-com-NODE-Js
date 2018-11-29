'use strict';

const express = require('express');
const controler = require('./controllers/contato-controler');
const router = express.Router();


router.post('/',controler.post);
router.put('/:id',controler.put);
router.delete('/',controler.delete);

module.exports = router;