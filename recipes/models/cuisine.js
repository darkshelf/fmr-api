const mongoose = require("mongoose");

const cusineSchema = new mongoose.Schema(
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

module.exports = mongoose.model("cuisine", cusineSchema);
