const { Match } = require("../models");

const matchData = [{}];

const seedMatches = () => Match.bulkCreate(matchData);

module.exports = seedMatches();
