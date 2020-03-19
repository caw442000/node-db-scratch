const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

// async function add(character) {
//   const [id] = await db("characters").insert(character);

//   return findById(id);
// }

function add(character) {
  return db("characters").insert(character);
}
function find() {
  return db("characters");
}

//query selector and can be name, id, etc
function findBy(filter) {
  return db("characters").where(filter);
}

function findById(id) {
  return db("characters")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("characters")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("characters")
    .where({ id })
    .del();
}
