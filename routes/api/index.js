const router = require("express").Router();
const usersRoutes = require("./users");
const imgurRoutes = require("./imgur");
const newsLettersRoutes = require("./newsletters");
const makersRoutes = require("./makers");
const advertisersRoutes = require("./advertisers");
const adminRoutes = require("./admin");
<<<<<<< HEAD
const candidatesRoutes = require("./candidates");
=======
// const subscribeRoutes = require("./subscribe");
>>>>>>> main

// Post routes
router.use("/users", usersRoutes);
router.use("/imgur", imgurRoutes);
router.use("/newsletters", newsLettersRoutes);
router.use("/makers", makersRoutes);
router.use("/advertisers", advertisersRoutes);
router.use("/admin", adminRoutes);
<<<<<<< HEAD
router.use("/candidates", candidatesRoutes);
=======
// router.use("/subscribe", subscribeRoutes);
>>>>>>> main

module.exports = router;
