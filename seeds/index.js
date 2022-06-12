const seedUsers = require("./user-seeds");
const seedQuestions = require("./question-seeds");
const seedAnswers = require("./answer-seeds");
const seedMatches = require("./match-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedQuestions();
  console.log("\n----- QUESTIONS SEEDED -----\n");

  await seedAnswers();
  console.log("\n----- ANSWERS SEEDED -----\n");

  await seedMatches();
  console.log("\n----- MATCHES SEEDED -----\n");

  process.exit(0);
};

seedAll();
