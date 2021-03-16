const router = require("express").Router();
const usersRoutes = require("./users");
const imgurRoutes = require("./imgur");
const newsLettersRoutes = require("./newsletters");
const makersRoutes = require("./makers");
const advertisersRoutes = require("./advertisers");
const adminRoutes = require("./admin");
const candidatesRoutes = require("./candidates");
const subscribeRoutes = require("./subscribe.js");

// Post routes
router.use("/users", usersRoutes);
router.use("/imgur", imgurRoutes);
router.use("/newsletters", newsLettersRoutes);
router.use("/makers", makersRoutes);
router.use("/advertisers", advertisersRoutes);
router.use("/admin", adminRoutes);
router.use("/candidates", candidatesRoutes);
router.use("/subscribe", subscribeRoutes);

module.exports = router;
