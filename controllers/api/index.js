const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const questionRoutes = require("./question-routes.js");

router.use("/users", userRoutes);
router.use("/questions", questionRoutes);

module.exports = router;
