const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);


// turn on connection to db and server
app.listen(PORT, () => {
  console.log(`Listening on PORT: http://localhost:${PORT}`);
  sequelize.sync({ force: true })
});
