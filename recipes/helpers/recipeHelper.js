const Recipe = require("../models/recipe");
const ih = require("./ingredientHelper");
const ch = require("./cuisineHelper")
const bh = require("./baseHelper");

const getRecipeById = id => {
  return Recipe.findById(id).exec();
};

const getRecipeBySlug = slug => {
  return Recipe.findOne({ slug: slug }).exec();
};

const getAllRecipes = () => {
  return Recipe.find({}).exec();
};

const createRecipe = recipeDetails => {
  return Recipe.create(recipeDetails);
};
const removeRecipeById = id => {
  return Recipe.findByIdAndRemove(id).exec();
};

const updateRecipeById = (id, update) => {
  return Recipe.findByIdAndUpdate(id, update, { new: true }).exec();
};

const buildRecipe = recipe => {
  let recipeData = recipe;
  recipeData["slug"] = bh.getSlug(recipeData.name);

  // Register ingredients
  recipeData["ingredients"] = ih.applySlugToIngredients(
    recipeData["ingredients"]
  );
  ih.registerIngredients(recipeData.ingredients);  

  // Register cuisine
  recipeData["cuisine"] = ch.applySlugToCuisine(
    recipeData["cuisine"]
  );  
  ch.registerCuisine(recipeData.cuisine);

  bh.createItemByModel(Recipe, recipeData, createRecipe);

  return recipe;
};

module.exports = {
  getRecipeById,
  getRecipeBySlug,
  getAllRecipes,
  createRecipe,
  removeRecipeById,
  updateRecipeById,
  buildRecipe
};
