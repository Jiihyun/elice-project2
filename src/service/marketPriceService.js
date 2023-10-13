const marketPriceDAO = require("../data-access/marketPriceDAO");

async function findPropertyMarketPrice(filter) {
  const findPropertyMarketPrice = await marketPriceDAO.findPropertyMarketPrice(
    filter
  );
  return findPropertyMarketPrice;
}

async function findRentMarketPrice(filter) {
  const findRentMarketPrice = await marketPriceDAO.findRentMarketPrice(filter);
  return findRentMarketPrice;
}

module.exports = {
  findPropertyMarketPrice,
  findRentMarketPrice,
};
