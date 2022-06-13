const seedAll = async () => {
  const sequelize = require("../config/connection");
  
  await sequelize.sync({ force: false, alter: false, logging: false });
  
  await require("./user-seeds")();
  await require("./answer-seeds")();
  await require("./match-seeds")();

  process.exit(0);
};

seedAll();
