const { User } = require("../models");

const userData = [
  {
    username: "Jane Doe",
    email: "testing123@gmial",
    password: "4563h21",
  },
  {
    username: "Matt Jones",
    email: "testing879@gmial",
    password: "eq3241",
  },
  {
    username: "John Miller",
    email: "235testing@gmial",
    password: "iwih91",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
