const router = require("express").Router();
const { Question } = require("../../models");

// get all questions
router.get("/", (req, res) => {
  Question.findAll()
    .then((dbQuestionData) => res.json(dbQuestionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get specific question
router.get("/:id", (req, res) => {
  Question.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbQuestionData) => {
      if (!dbQuestionData) {
        res.status(404).json({ message: "No question found with this id" });
        return;
      }
      res.json(dbQuestionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new question
router.post("/", (req, res) => {
  // expects => {"question": "this is a question"}
  Question.create({
    question: req.body.question,
  })
    .then((dbQuestionData) => res.json(dbQuestionData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// change a question
// router.put();

// delete a question
// router.delete();

module.exports = router;
