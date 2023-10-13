const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const propertyMarketPriceSchema = new Schema(
  {
    applicationYear: {
      type: Number,
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
    },
    legalName: {
      type: String,
    },
    meanAmount: {
      type: Number,
      required: true,
    },
    meanAmountPerArea: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "propertyMarketPrice",
    timestamps: true,
  }
);

exports.PropertyMarketPrice = mongoose.model(
  "propertyMarketPrice",
  propertyMarketPriceSchema
);

// {
//     "application_year":2018,
//     "district_code":11110,
//     "district_name":"\uc885\ub85c\uad6c",
//     "mean_amount":56517.8809971778,
//     "mean_amount_per_area":715.6290247121
//   },
