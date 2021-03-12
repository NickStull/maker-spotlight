const router = require("express").Router();
const newsLettersController = require("../../controllers/newsLettersController");

// Matches with "/api/users"
router
  .route("/")
  .get(newsLettersController.findAll)
  .post(newsLettersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(newsLettersController.findById)
  .get(newsLettersController.findByFirebaseId)
  .put(newsLettersController.update)
  .delete(newsLettersController.remove);

module.exports = router;

