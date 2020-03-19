const router = require('express').Router()

const Characters = require('./character-model.js');


router.get('/', (req, res) => {
  res.status(200).json({ message: `it is working from character router`})
})


module.exports = router;