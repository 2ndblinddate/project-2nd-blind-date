const { User } = require("../models");

const userData = [
  {
    email: "johndoe@gmail.com",
    password: "4563h21",
    username: "john45",
    age: 34,
    gender: "Male",
    sexual_orientation: "Heterosexual",
  },
  {
    email: "janemary@gmail.com",
    password: "eq3241",
    username: "janemary12",
    age: 25,
    gender: "Female",
    sexual_orientation: "Lesbian",
  },
  {
    email: "diegoconcepcion@gmail.com",
    password: "iwih91",
    username: "Diego345",
    age: 21,
    gender: "Male",
    sexual_orientation: "Heterosexual",
  },
  {
    email: "lunamyers@gmail.com",
    password: "123456",
    username: "lunamyersloli",
    age: 19,
    gender: "Female",
    sexual_orientation: "Bisexual",
  },
  {
    email: "tylerjc@gmail.com",
    password: "tylerisawesome",
    username: "tylerjones",
    age: 49,
    gender: "Male",
    sexual_orientation: "Homosexual",
  },
  {
    email: "jenny287@gmail.com",
    password: "jidso73",
    username: "jenny902",
    age: 23,
    gender: "Female",
    sexual_orientation: "Pansexual",
  },
  {
    email: "kennybriggs@gmail.com",
    password: "123jkj",
    username: "Kennyborges90",
    age: 39,
    gender: "Female",
    sexual_orientation: "Lesbian",
  },
  {
    email: "sophiekeller@gmail.com",
    password: "alskd87",
    username: "sophiefunny",
    age: 35,
    gender: "Female",
    sexual_orientation: "Heterosexual",
  },
];

module.exports = () => User.bulkCreate(userData);
