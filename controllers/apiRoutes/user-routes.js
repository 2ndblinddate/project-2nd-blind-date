const router = require("express").Router();
const { User, Answer, Match } = require("../../models");

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserInfo) => res.json(dbUserInfo))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/:id/updateProfile", async (req, res) => {
  try {
    await User.update({
      username: req.body.username,
      age: req.body.age,
      gender: req.body.gender,
      sexual_orientation: req.body.sexual_orientation,
    },
    {
      where: { id: req.params.id }
    });

    res.status(200);
    res.send("ok");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/:id/updateAnswers", async (req, res) => {
  try {
    for await (const [index, answer] of req.body.entries()) {
      const dbAnswer = await Answer.findOne({
        where: { 
          question_id: index,
          user_id: req.params.id
        }
      });

      if (dbAnswer) {
        await Answer.update({
          answer
        },
        {
          where: { 
            question_id: index,
            user_id: req.params.id
          }
        });
      } else {
        await Answer.create({
          question_id: index,
          user_id: req.params.id,
          answer
        })
      }
    }

    res.status(200);
    res.send("ok");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Answer,
        attributes:['id', 'question_id', 'answer']
      },
      {
        model: Match,
        attributes:['user_match']
      }
    ],
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserInfo) => {
      if (!dbUserInfo) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  try {
    const dbUserInfo = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    res.json(dbUserInfo);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserInfo) => {
    if (!dbUserInfo) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserInfo.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    req.session.save(() => {
      // declare session variables
      req.session.user = dbUserInfo.id;
      req.session.email = dbUserInfo.email;
      req.session.loggedIn = true;

console.log('success');
    res.json({ user: dbUserInfo, message: "You are now logged in!" });
  });
});
});
router.put("/:id", (req, res) => {

  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserInfo) => {
      if (!dbUserInfo[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserInfo) => {
      if (!dbUserInfo) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/logout', (req,res)=> {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }

});

module.exports = router;
