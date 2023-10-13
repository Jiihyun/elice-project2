const marketPriceService = require("../service/marketPriceService");
const util = require("../misc/util");
const commonErrors = require("../misc/commonErrors");
const AppError = require("../misc/AppError");

async function findPropertyMarketPrice(req, res, next) {
  const { districtName, legalName } = util.sanitizeObject(req.query);
  try {
    const propertyMarketPrice =
      await marketPriceService.findPropertyMarketPrice({
        districtName: districtName ?? "강남구",
        legalName: legalName ?? "null",
      });
    res.json(util.buildResponse(propertyMarketPrice, null, 200));
  } catch (err) {
    throw new AppError(commonErrors.businessError, 400, err.message);
  }
}

async function findRentMarketPrice(req, res, next) {
  const { districtName, legalName, rentType } = util.sanitizeObject(req.query);
  try {
    const rentMarketPrice = await marketPriceService.findRentMarketPrice({
      districtName: districtName ?? "강남구",
      legalName: legalName ?? "null",
      rentType: rentType ?? "월세",
    });
    res.json(util.buildResponse(rentMarketPrice, null, 200));
  } catch (err) {
    throw new AppError(commonErrors.businessError, 400, err.message);
  }
}

module.exports = { findPropertyMarketPrice, findRentMarketPrice };
