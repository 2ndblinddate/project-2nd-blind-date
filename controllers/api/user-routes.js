const router = require("express").Router();
const { User, Answer } = require("../../models");

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

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Answer,
        attributes:['id', 'question_id', 'answer']
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

router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserInfo) => {
      res.json(dbUserInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
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

    res.json({ user: dbUserInfo, message: "You are now logged in!" });
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

module.exports = router;
