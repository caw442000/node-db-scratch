create readme file with 

echo '#NodeJs Project from Scratch with API' >> README.md

git init 

Create package.json file

npm init -y

gitignore with 

npx gitignore node


after setting up completely blank repo on github
  git remote -v
  git remote add origin <URL>
  git remote -v


ADD dependencies

install nodemon

npm i -D nodemon

THE REST OF DEPENDENCIES

npm i express knex sqlite3 helmet morgan cors dotenv


CREATE FOLDER FILE STRUCTURE

mkdir api auth database utilities

touch index.js api/server.js auth/character-model.js auth/character-router.js

START WITH BUILDING INDEX.JS 

      const server = require('./api/server.js')

      const PORT = process.env.PORT || 5000

      server.listen(PORT, () => {
        console.log(`Server is running on localhost:${PORT}`)
      })

BUILD INITIAL SERVER.JS

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


Confirm morgan is working in console.log and helmet is working in http client for headers

Confirm GET is working

ADD knex

knex init