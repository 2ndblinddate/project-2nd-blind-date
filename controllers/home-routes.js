const router = require('express').Router();
const sequelize = require('../config/connection');
<<<<<<< HEAD
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
      res.render('main', {
        loggedIn: req.session.loggedIn
    });
//const { User } = require('../models');
 router.get('/', (req, res) => {
  
        res.render('homepage' );
      
     
>>>>>>> 2809ece587bc2847670d58f6bcc1b75e57533858
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