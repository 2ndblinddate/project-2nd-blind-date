const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

const sequelize = require('./config/connection');
const sess = {
    secret: process.env.SESSION_SECRET, 
    cookie: {},
    resave: false,
    saveUnintialized: true,
    store: new SequelizeStore({
       db: sequelize 
    })

};
app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});