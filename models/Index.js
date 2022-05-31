const User = require("./User");
const Question = require("./Question");
const Answer = require("./Answer");
const Match = require("./Match");

User.hasMany(Question, {
    foreignKey: 'user_id'
});

User.hasMany(Answer, {
    foreignKey: 'user_id'
});

Question.belongsTo(User, {
    foreignKey: 'user_id'
});

Question.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Question, Answer, Match };
