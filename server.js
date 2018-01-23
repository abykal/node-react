import config from './config';
import apiRouter from './api'

import express from 'express';
const server = express();

// 2. In addition to port listening, 
//    it also does server-side rotuing 
server.get('/', (req, res) => {
    //use res.send() for sending simple strings
    res.send('Hello Express');
});

// Middleware for serving public files
server.use('/api', apiRouter);
server.use(express.static('public'));

// 1. Express listening to single port for any user requests
server. listen(config.port, () => {
    console.info("Express listening on port", config.port);
});