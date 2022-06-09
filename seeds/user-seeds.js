const { User } = require("../models");

const userData = [
  {
    email: "johndoe@gmail.com",
    password: "4563h21",
  },
  {
    email: "janemary@gmail.com",
    password: "eq3241",
  },
  {
    email: "diegoconcepcion@gmail.com",
    password: "iwih91",
  },
  {
    email: "lunamyers@gmail.com",
    password: "123456",
  },
  {
    email: "tylerjc@gmail.com",
    password: "tylerisawesome",
  },
  {
    email: "jenny287@gmail.com",
    password: "jidso73",
  },
  {
    email: "kennybriggs@gmail.com",
    password: "123jkj",
  },
  {
    email: "sophiekeller@gmail.com",
    password: "alskd87",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
