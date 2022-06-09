const { Question } = require("../models");

const questionData = [
  {
    question: "What do you most love to do in your free time",
  },
  {
    question: "What is your favorite music genre",
  },
  {
    question: "What is one activity that you would like to do on a date",
  },
  {
    question: "What is your sign?",
  },
  {
    question: "What is your best quality?",
  },
  {
    question: "What are your favorite TV shows?",
  },
  {
    question: "What is a BIG NO on the first date?",
  },
  {
    question: "How do you define your personality?",
  },
  {
    question: "What is your current occupation?",
  },
  {
    question: "What are you looking for in a relantionship?",
  },
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;
