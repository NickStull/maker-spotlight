const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/").get(usersController.findCandidates)

module.exports = router;
