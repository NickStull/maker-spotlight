const router = require("express").Router();
const subscribeController = require("../../controllers/subscribeController");

// Matches with "/api/subscribe"
router.route("/")
  .post(subscribeController.create);

  module.exports = router;
