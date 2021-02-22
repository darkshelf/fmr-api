const Cuisine = require("../models/cuisine");
const bh = require("./baseHelper");

const getCuisineById = id => {
  return Cuisine.findById(id).exec();
};

const getCuisineBySlug = slug => {
  return Cuisine.findOne({ slug: slug }).exec();
};

const getAllCuisines = () => {
  return Cuisine.find({}).exec();
};

const createCuisine = CuisineDetails => {
  return Cuisine.create(CuisineDetails);
};
const removeCuisineById = id => {
  return Cuisine.findByIdAndRemove(id).exec();
};

const updateCuisineById = (id, update) => {
  return Cuisine.findByIdAndUpdate(id, update, { new: true }).exec();
};

const getCuisineList = async CuisineSlugs => {
  const CuisinesArray = {};
  await CuisineSlugs.forEach(function(slug) {
    CuisinesArray.push(getCuisineBySlug(slug));
  });
  return CuisinesArray;
};

const applySlugToCuisine = CuisineItem => {
    let CuisineData = CuisineItem;
    
    CuisineData["slug"] = bh.getSlug(CuisineData.name);
    return CuisineData;
};

const registerCuisine = async CuisineItem => {    
    let cuisineData = CuisineItem;    
    bh.createItemByModel(Cuisine, cuisineData, createCuisine);
        
    return true;
};

module.exports = {
  getCuisineById,
  getCuisineBySlug,
  getAllCuisines,
  createCuisine,
  removeCuisineById,
  updateCuisineById,
  getCuisineList,
  applySlugToCuisine,
  registerCuisine
};
