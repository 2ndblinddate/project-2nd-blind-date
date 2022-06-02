const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
 router.get('/', (req, res) => {
     console.log(req.session);
    User.findAll({
      attributes: [
        'id',
        'email',
        
      ],

    })
      .then(dbUserInfo => {
       const users = dbUserInfo.map(user => user.get({plain:true}));
        res.render('homepage', {users} );
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    res.render('login');
  });
  router.get('/signup', (req,res)=> {
   
      res.render('signup')
  });

  module.exports = router;