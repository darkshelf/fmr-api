const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      unique: true
    },
    order: {
      type: Number,
      required: true
    },
    updated: { type: Date, default: Date.now() }
  },
  { timestamps: true }
);

module.exports = mongoose.model("step", stepSchema);
