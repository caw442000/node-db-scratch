const router = require("express").Router();

const Characters = require("./character-model.js");

router.get("/", (req, res) => {
  Characters.find()
    .then(character => {
      res.status(200).json(character)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});

module.exports = router;
