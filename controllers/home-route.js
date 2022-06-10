const router = require('express').Router();
const sequelize = require('../config/connection');
const {Answer, Match, Question, User} = require('../models');

router.get('/', (req, res) => {
  
    res.render('login' );
  
 
});
router.get('/myprofile', (req, res) => {
    User.findAll({
        attributes: [
            'id',
            'email',
        ],
    
    })
    .then((dbUserInfo) => {
        const users = dbUserInfo.map(user => user.get({ plain: true}));
        res.render('myprofile', {
            users
        });
    }) 
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
   
});
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/myprofile');
        return;
      }
    res.render('login');
  });
  router.get('/signup', (req,res)=> {
   
      res.render('signup')
  });



module.exports = router;