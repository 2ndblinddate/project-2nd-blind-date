const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 8080;


const sequelize = require("./config/connection");
const sess = {
  secret: "process.env.SESSION_SECRET",
  cookie: { maxAge: 4000000 },
  resave: false,
  saveUnintialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));


const hbs = exphbs.create({});

app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "index",
  })
);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync({ force: false, alter: false, logging: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
