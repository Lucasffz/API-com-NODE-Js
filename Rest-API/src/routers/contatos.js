'use strict';

const express = require('express');
const router = express.Router();

let contatos = [];

let id = 1;


router.get('/',(req,res,next) => {
    res.status(201).json(contatos);
});

router.post('/',(req,res,next) => {
    let contato = {
      id: id++,
      nome: req.body.nome
    }
    contatos.push(contato);

    res.status(201).json(contato);
});
router.get('/:id',(req,res,next) => {
    let contato = contatos.find((contato) =>{
        return contato.id == req.params.id;
    });
    res.status(200).json(contato);
});

router.put('/:id',(req,res,next) => {
  let contato = contatos.find((contato) =>{
      return contato.id == req.params.id;
  });
  contato.nome = req.body.nome;
  res.status(201).json(contato);
});
router.delete('/',(req,res,next) => {
  let contato = contatos.find((contato) =>{
      return contato.id == req.params.id;
  });
  contatos = contatos.filter((contato) =>{
      return contato.id != req.params.id;
  });
  res.status(201).json(contato);
});

module.exports = router;

/*
exports.post = (req,res,next) => {
    res.status(201).send(req.body);
};

exports.put = (req,res,next) => {
    const id = req.params.id;
        res.status(201).send({
            id: id,
            item: req.body
     });
};

exports.delete = (req,res,next) => {
    const id = req.params.id;
        res.status(201).send({
            id: id,
            item: req.body
     });
};


*/
