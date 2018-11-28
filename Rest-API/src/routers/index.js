'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).send({
        title: 'REST api',
        version: '0.1'
    });
});

router.post('/', (req,res,next) => {
    res.status(201).send(req.body);
});

router.put('/:id', (req,res,next) => {
        const id = req.params.id;
        res.status(201).send({
            id: id,
            item: req.body
     });
});

router.delete('/:id', (req,res,next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
 });
});

module.exports = router;
