const router = require("express").Router();
const { User } = require("../../models");

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
  // expects { email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({

    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserInfo) => {
      req.session.save(() => {
        req.session.user = dbUserInfo.id;
        req.session.email= dbUserInfo.email;
        req.session.loggedIn = true;
    
      res.json(dbUserInfo);
    });
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
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
  // expects { email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
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
