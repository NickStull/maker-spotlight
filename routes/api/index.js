const router = require("express").Router();
const usersRoutes = require("./users");
const imgurRoutes = require("./imgur");
const newsLettersRoutes = require("./newsletters");

// Post routes
router.use("/users", usersRoutes);
router.use("/imgur", imgurRoutes);
router.use("/newsletters", newsLettersRoutes);

module.exports = router;
