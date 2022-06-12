const { Answer } = require("../models");

const answerData = [
  {
    user_id: 1,
    question_id: 1,
    answer:
      "I like to take walks on the beach, read books and watch the sunset.",
  },
  {
    user_id: 1,
    question_id: 2,
    answer: "Classic Rock",
  },
  {
    user_id: 1,
    question_id: 3,
    answer: "Go for a walk in the park.",
  },
  {
    user_id: 1,
    question_id: 4,
    answer: "Taurus",
  },
  {
    user_id: 1,
    question_id: 5,
    answer: "My sense of humor.",
  },
  {
    user_id: 1,
    question_id: 6,
    answer: "Last Week Tonight",
  },
  {
    user_id: 1,
    question_id: 7,
    answer: "Drugs",
  },
  {
    user_id: 1,
    question_id: 8,
    answer: "Funny guy",
  },
  {
    user_id: 1,
    question_id: 9,
    answer: "Pimp",
  },
  {
    user_id: 1,
    question_id: 10,
    answer: "A soulmate",
  },
];

module.exports = async () => {
  for (let i = 1; i <= 8; i++) {
    const dataForUserI = [...answerData].map((answer) => {
      answer.user_id = i;

      return answer;
    });

    await Answer.bulkCreate(dataForUserI);
  }
};