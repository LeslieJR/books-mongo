const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const server = express();

//Settings
server.set('port', 4800);
server.use(cors());
server.use(express.json());

//Routes

server.use('/books', routes.bookRoutes);
server.use('/users', routes.userRoutes)

module.exports = server;