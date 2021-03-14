const router = require("express").Router();
const usersRoutes = require("./users");
const imgurRoutes = require("./imgur");
const newsLettersRoutes = require("./newsletters");
const makersRoutes = require("./makers");
const advertisersRoutes = require("./advertisers");
// const adminRoutes = require("./adminRoutes");

// Post routes
router.use("/users", usersRoutes);
router.use("/imgur", imgurRoutes);
router.use("/newsletters", newsLettersRoutes);
router.use("/makers", makersRoutes);
router.use("/advertisers", advertisersRoutes);
router.use("/admin", usersRoutes);

module.exports = router;
