const router = require("express").Router();
const imgurController = require("../../controllers/imgurController");

router.route("/").get(imgurController.imgur);

module.exports = router;
