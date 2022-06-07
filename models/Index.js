const User = require("./User");
const Question = require("./Question");
const Answer = require("./Answer");
const Match = require("./Match");

Answer.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Answer.belongsTo(User, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE'
})
module.exports = { User, Question, Answer, Match };
