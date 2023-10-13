const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const rentMarketPriceSchema = new Schema(
  {
    applicationYear: {
      type: String,
      required: true,
    },
    districtCode: {
      type: Number,
      required: true,
    },
    districtName: {
      type: String,
      required: true,
    },
    legalCode: {
      type: Number,
      required: true,
    },
    legalName: {
      type: String,
      required: true,
    },
    rentType: {
      type: String,
      required: true,
    },
    meanDeposit: {
      type: Number,
      required: true,
    },
    meanRent: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "rentMarketPrice",
    timestamps: true,
  }
);

exports.RentMarketPrice = mongoose.model(
  "rentMarketPrice",
  rentMarketPriceSchema
);
