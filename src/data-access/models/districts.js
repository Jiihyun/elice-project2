const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const districtsSchema = new Schema(
  {
    districtCode: {
      type: String,
      required: true,
    },
    districtName: {
      type: String,
      required: true,
    },
  },
  {
    collection: "districts",
    timestamps: true,
  }
);

exports.Districts = mongoose.model("districts", districtsSchema);
