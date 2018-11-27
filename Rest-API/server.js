'use strict'

const http = require('http');
const debug = require('debug')('REST-API:server');
const express = require('express');

// Instancia uma aplicação express
const app = express();

let port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);
const router = express.Router()

const route = router.get('/', (req,res,next) => {
        res.status(200).send({
            title: 'REST api',
            version: '0.1'
        });
});

app.use('/', route);

server.listen(port);
server.on('listening',onListening);
console.log('API rodando em porta ' + port);
 

function normalizePort(val){
    const port = parseInt(val,10);
    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }

    return false;
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port;
    debug('Listening on' + bind);
}

