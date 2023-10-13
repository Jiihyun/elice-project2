const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const dongsSchema = new Schema(
  {
    districtCode: {
      type: String,
      required: true,
    },
    legalCode: {
      type: String,
      required: true,
    },
    districtName: {
      type: String,
      required: true,
    },
    legalName: {
      type: String,
      required: true,
    },
  },
  {
    collection: "dongs",
    timestamps: true,
  }
);

exports.Dongs = mongoose.model("dongs", dongsSchema);
