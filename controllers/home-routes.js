const router = require("express").Router();
const sequelize = require("../config/connection");
const { Answer, Match, Question, User } = require("../models");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/explore", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  
  try {
    const dbUserInfo = await User.findAll({});

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

  res.render("login", { layout: false });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/home");
    return;
  }

  res.render("signup", { layout: false });
});

router.get("/users/:id", async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id
    },
  });

  const answers = await Answer.findAll({
    where: {
      user_id: req.params.id,
    }
  });

  let isMatched = false;

  if (req.session.loggedIn) {
    let match = await Match.findOne({
      where: {
        user_id: req.session.user,
        user_match: req.params.id
      }
    });

    if (match) {
      isMatched = true;
    }
  }

  res.render("profile", {
    loggedUserId: req?.session?.user ?? '',
    user: user.get({ plain: true }),
    answers: answers.map((answer) => answer.get({ plain: true })).sort((a, b) => a.question_id - b.question_id),
    isMatched
  });
});

router.get("/matches", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("login")
  }

  const matches = await Match.findAll({
    where: {
      user_id: req.session.user
    }
  });

  const matchedUsers = await Promise.all(matches.map((match) => User.findOne({ where: { id: match.user_match }})));

  res.render("matches", {
    matches: matchedUsers.map((user) => user.get({ plain: true }))
  });
});

module.exports = router;
