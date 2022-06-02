const userseeds = require('./user.json');
const questionseeds = require('./questions.json')
const sequelize = require('../config/connection');

const User = require('../models/User');
const Question = require('../models/Question')


const username = async() => {
    await sequelize.sync({ force: true});
    const user = await User.bulkCreate(userseeds, {
        individualHooks: true,
    });
    
    for (const {id} of user ) {
        const questions = await Question.create({
            user_id: id,
        })
        };
        
    console.log('success')
    process.exit(0);
};

username()
