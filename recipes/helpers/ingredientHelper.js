const Ingredient = require("../models/ingredient");
const bh = require("./baseHelper");

const getIngredientById = id => {
  return Ingredient.findById(id).exec();
};

const getIngredientBySlug = slug => {
  return Ingredient.findOne({ slug: slug }).exec();
};

const getAllIngredients = () => {
  return Ingredient.find({}).exec();
};

const createIngredient = ingredientDetails => {
  return Ingredient.create(ingredientDetails);
};
const removeIngredientById = id => {
  return Ingredient.findByIdAndRemove(id).exec();
};

const updateIngredientById = (id, update) => {
  return Ingredient.findByIdAndUpdate(id, update, { new: true }).exec();
};

const getIngredientList = async ingredientSlugs => {
  const ingredientsArray = {};
  await ingredientSlugs.forEach(function(slug) {
    ingredientsArray.push(getIngredientBySlug(slug));
  });
  return ingredientsArray;
};

const applySlugToIngredients = ingredients => {
  let ingredientsArray = [];

  ingredients.forEach(function(ingredient) {
    let ingredientData = ingredient;
    ingredientData["slug"] = bh.getSlug(ingredientData.name);
    ingredientsArray.push(ingredientData);
  });
  return ingredientsArray;
};

const registerIngredients = async ingredients => {
  await ingredients.forEach(function(ingredient) {
    let ingredientData = ingredient;
    ingredientData["slug"] = bh.getSlug(ingredientData.name);
    bh.createItemByModel(Ingredient, ingredientData, createIngredient);
  });
  return true;
};

module.exports = {
  getIngredientById,
  getIngredientBySlug,
  getAllIngredients,
  createIngredient,
  removeIngredientById,
  updateIngredientById,
  getIngredientList,
  applySlugToIngredients,
  registerIngredients
};
