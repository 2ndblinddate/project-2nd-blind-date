const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const questionRoutes = require("./question-routes.js");
const answerRoutes = require("./answer-routes.js");
const matchRoutes = require("./match-routes.js");

router.use("/users", userRoutes);
router.use("/questions", questionRoutes);
router.use("/answers", answerRoutes);
router.use("/matches", matchRoutes);

module.exports = router;
