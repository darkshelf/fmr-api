var rh = require("../helpers/recipeHelper");

// Display list of all Recipes.
exports.listRecipes = function(req, res) {
  res.send("NOT IMPLEMENTED: Recipe list");
};
async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findById(id).exec();
  res.status(200).json(todo);
};
// Create new Recipe
exports.showRecipe = async function(req, res) {
  const slug = req.params.slug;
  const recipe = await rh.getRecipeBySlug(slug);
  // res.status(200).json(recipe);
  res.render("recipe/showRecipe.html");
};

// Create new Recipe
exports.createRecipe = function(req, res) {
  res.sendView("recipe/create.html");
};

// Create new Recipe
exports.submitRecipe = function(req, res) {
  var recipeData = req.body;
  rh.buildRecipe(recipeData);

  res.send(recipeData);
};
