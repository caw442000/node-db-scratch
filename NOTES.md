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
