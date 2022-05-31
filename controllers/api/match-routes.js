const router = require("express").Router();
const { Match } = require("../../models");

// get all matches
router.get("/", (req, res) => {
  Match.findAll()
    .then((dbMatchData) => res.json(dbMatchData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a match
router.post("/", (req, res) => {
  // expects => {"user_id_a": 1, "user_id_b": 2}
  Match.create({
    user_id_a: req.body.user_id_a,
    user_id_b: req.body.user_id_b,
  })
    .then((dbMatchData) => res.json(dbMatchData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// destroy a match
router.delete("/:id", (req, res) => {
  Match.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbMatchData) => {
      if (!dbMatchData) {
        res
          .status(404)
          .json({ message: "No matches found with this id" });
        return;
      }
      res.json(dbMatchData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
