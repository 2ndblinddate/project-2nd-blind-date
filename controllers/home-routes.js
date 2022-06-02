const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
 router.get('/', (req, res) => {
    User.findAll({
      attributes: [
        'id',
        'email',
        
      ],

    })
      .then( dbUserInfo=> {
        // pass a single post object into the homepage template
        res.render('homepage' );
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    res.render('login');
  });
  router.get('/signup', (req,res)=> {
      res.render('signup')
  });

  module.exports = router;