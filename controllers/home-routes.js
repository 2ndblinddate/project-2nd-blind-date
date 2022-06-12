const router = require("express").Router();
const sequelize = require("../config/connection");
const { Answer, Match, Question, User } = require("../models");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/explore", async (req, res) => {
  try {
    const dbUserInfo = await User.findAll({
      attributes: ["id", "email"],
    });

    const users = dbUserInfo.map((user) => user.get({ plain: true }));
    res.render("home", {
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/myprofile", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }

  const user = await User.findOne({
    where: {
      id: req.session.user,
    },
  });

  const answers = await Answer.findAll({
    where: {
      user_id: req.session.user,
    }
  });

  res.render("myprofile", {
    user: user.get({ plain: true }),
    answers: answers.map((answer) => answer.get({ plain: true })).sort((a, b) => a.question_id - b.question_id), 
  });
});

router.get("/home", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }

  const user = await User.findOne({
    where: {
      id: req.session.user,
    },
  });

  if (
    user.username === null ||
    user.age === null ||
    user.gender === null ||
    user.sexual_orientation === null
  ) {
    res.redirect("/createProfile");
    return;
  }

  res.redirect("/explore");
  return;
});

router.get("/createProfile", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }

  const user = await User.findOne({
    where: {
      id: req.session.user,
    },
  });

  res.render("createProfile", { layout: false, user: user.get({ plain: true }) });
});

router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/home");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
