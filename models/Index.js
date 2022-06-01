const User = require("./User");
const Question = require("./Question");
const Answer = require("./Answer");
const Match = require("./Match");

//Answer.belongsToMany(User, {through: 'Question', sourceKey: 'user_id', targetKey: 'user_id'});
User.hasMany(Answer,{foreignKey: 'user_id'});
Answer.belongsTo(User, {foreignKey: 'user_id'});
Question.hasMany(Answer, {foreignKey: 'question_id'});
Answer.belongsTo(Question, {foreignKey: 'question_id'});

module.exports = { User, Question, Answer, Match };
