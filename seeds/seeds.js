const userseeds = require('./user.json');
const questionseeds = require('./question.json');
const sequelize = require('../config/connection');


const User = require('../models/User');
const Question = require('../models/Question')

const username = async() => {
    await sequelize.sync({ force: true});
    await User.bulkCreate(userseeds, {
        individualHooks: true,
    });

await Question.bulkCreate(questionseeds)
    
        
    console.log('success')
    process.exit(0);
};

username()
