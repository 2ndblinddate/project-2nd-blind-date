const express = require('express');
//const session = require('express-session');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
// const Sequelizestore = require('connect-session-sequelize')(session.store);


const app = express();
 const PORT = process.env.PORT || 3000;
// const sess = {
//     secret: 'secretkey', 
//     cookie: {},
//     resave: false,
//     saveUnintialize: true,
//     store: new Sequelizestore({
//        db: sequelize 
//     })

// }
// app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(express.static('public'));
app.use(controllers);

app.listen(PORT,() => {
    console.log(`Listening on PORT: http://localhost:${PORT}`);  
    sequelize.sync({force: false})
});

