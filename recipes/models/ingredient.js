const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema(
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
    updated: { type: Date, default: Date.now() }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ingredient", ingredientSchema);
