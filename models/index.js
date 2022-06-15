const User = require("./User");
const Question = require("./Question");
const Answer = require("./Answer");
const Match = require("./Match");

User.hasMany(Answer,{foreignKey: 'user_id'});
User.hasMany(Match, {foreignKey: 'user_id'});
Answer.belongsTo(User, {foreignKey: 'user_id'});
Match.belongsTo(User, {foreignKey: 'user_id'});

module.exports = { User, Question, Answer, Match };
