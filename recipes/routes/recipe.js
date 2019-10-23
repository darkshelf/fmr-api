var express = require("express");
var router = express.Router();

// Require controller modules.
var recipeController = require("../controllers/recipeController");
router.get("/list", recipeController.listRecipes);
router.get("/show/:slug", recipeController.showRecipe);
router.get("/create", recipeController.createRecipe);
router.post("/submit", recipeController.submitRecipe);

module.exports = router;
