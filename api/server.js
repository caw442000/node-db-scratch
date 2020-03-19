const express = require("express");
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');


const server = express();

const characterRouter = require('../auth/character-router.js')

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'It is working'})
})


// server.use('/api/characters', characterRouter)

module.exports = server;
