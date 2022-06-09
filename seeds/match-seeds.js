const { Match } = require("../models");

const matchData = [
  {
    user_id: 1,
    user_match: 2,
  },
  {
    user_id: 3,
    user_match: 4,
  },
  {
    user_id: 5,
    user_match: 6,
  },
  {
    user_id: 7,
    user_match: 8,
  },
];

const seedMatches = () => Match.bulkCreate(matchData);

module.exports = seedMatches;
