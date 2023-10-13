const { PropertyMarketPrice } = require("./models/propertyMarketPrice");
const { RentMarketPrice } = require("./models/rentMarketPrice");

async function findPropertyMarketPrice(filter) {
  const propertyMarketPrice = await PropertyMarketPrice.find(filter).lean();
  return propertyMarketPrice;
}

async function findRentMarketPrice(filter) {
  const rentMarketPrice = await RentMarketPrice.find(filter).lean();
  return rentMarketPrice;
}

module.exports = {
  findPropertyMarketPrice,
  findRentMarketPrice,
};
