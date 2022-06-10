const router = require('express').Router();
const sequelize = require('../config/connection');
const {Answer, Match, Question, User} = require('../models');

router.get('/', (req, res) => {
  
    res.render('login' );
  
 
});
router.get('/home', (req, res) => {
    Question.findAll({
        attributes: [
            'id',
            'question',
        ],
        include: [
            {
        
                    model: Answer,
                attributes: ['user_id', 'question_id', 'answer'],
            }, 
        ]
    })
    .then((dbQuestionData) => {
        const questions = dbQuestionData.map(question => question.get({ plain: true}));
        res.render('home', {
            questions
        });
    }) 
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
   
});
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
        return;
      }
    res.render('login');
  });
  router.get('/signup', (req,res)=> {
   
      res.render('signup')
  });

module.exports = router;