const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    ingredients: [{}],
    steps: [{}],
    updated: { type: Date, default: Date.now() }
  },
  { timestamps: true }
);

module.exports = mongoose.model("recipe", recipeSchema);
