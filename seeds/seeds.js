const userseeds = require('./user.json');
const sequelize = require('../config/connection');

const User = require('../models/User');
const username = async() => {
    await sequelize.sync({ force: true});
    await User.bulkCreate(userseeds, {
        individualHooks: true,
    })
    console.log('success')
    process.exit(0);
};
username();
