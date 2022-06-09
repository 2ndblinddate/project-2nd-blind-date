const { Answer } = require("../models");

const answerData = [{}];

const seedAnswers = () => Answer.bulkCreate(answerData);

module.exports = seedAnswers;
