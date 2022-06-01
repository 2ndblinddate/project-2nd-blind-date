const router = require("express").Router();
const { Answer, User, Question } = require("../../models");

// get all answers
router.get("/", (req, res) => {
  Answer.findAll({
    attributes: ['id', 'answer'],
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      },
      {
        model: Question,
        attributes: ['id', 'question']
      }
    ]
  })
    .then((dbAnswerData) => res.json(dbAnswerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new answer
router.post("/", (req, res) => {
  // expects => {"user_id": 1, "question_id": 1, "answer": "answer text"}
  Answer.create({
    user_id: req.body.user_id,
    question_id: req.body.question_id,
    answer: req.body.answer,
  })
    .then((dbAnswerData) => res.json(dbAnswerData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// edit an answer
router.put("/:id", (req, res) => {
  // expects => {"answer": "answer text"}
  Answer.update(
    {
      answer: req.body.answer,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbAnswerData) => {
      if (!dbAnswerData[0]) {
        res.status(404).json({ message: "No user answer found for this id." });
      }
      res.json(dbAnswerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
