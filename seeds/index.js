const seedUsers = require("./user-seeds.js");
const seedQuestions = require("./question-seeds.js");


const sequelize = require("../config/connection");

const User = require("../models/User");
const Question = require("../models/Question");

const username = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await User.bulkCreate(seedUsers, {
    individualHooks: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  await Question.bulkCreate(seedQuestions);
  console.log('\n----- QUESTIONS SEEDED -----\n');

  console.log('\n----- ANSWERS SEEDED -----\n');

  console.log('\n----- MATCHES SEEDED -----\n');

  console.log("success");
  process.exit(0);
};

username();
