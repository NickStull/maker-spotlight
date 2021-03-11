const router = require("express").Router();
const usersRoutes = require("./users");
const imgurRoutes = require("./imgur");

// Post routes
router.use("/users", usersRoutes);
router.use("/imgur", imgurRoutes);

module.exports = router;
