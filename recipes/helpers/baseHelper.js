const slugify = require("slugify");

// Converts names to slugs
const getSlug = name => {
  return slugify(name, {
    replacement: "-", // replace spaces with replacement
    remove: null, // regex to remove characters
    lower: true // result in lower case
  });
};

const registerNewItem = (item, model, createItem) => {
  let itemData = {};
  itemData["name"] = item.name;
  itemData["slug"] = getSlug(item.name);
  createItemByModel(model, itemData, createItem);

  return true;
};

const createItemByModel = (model, itemData, createItem) => {
  model
    .findOne({ slug: itemData.slug }, function(err, result) {
      if (err) {
        /* handle err */
      }

      if (result) {
        console.log(`${itemData.slug} already exists`);
        console.log(itemData);
      } else {
        createItem(itemData);
        console.log(`${itemData.slug} has been created`);
      }
    })
    .exec();
};

module.exports = {
  getSlug,
  registerNewItem,
  createItemByModel
};
