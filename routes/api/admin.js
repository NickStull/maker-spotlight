const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/admin"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/admin/:id"

router
  .route("/:id")
  .get(usersController.findByFirebaseId)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
