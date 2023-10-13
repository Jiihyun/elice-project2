const { Router } = require("express");
const marketPriceController = require("../controllers/marketPriceController");
const marketPriceRouter = Router();

marketPriceRouter.get(
  "/property",
  marketPriceController.findPropertyMarketPrice
);

marketPriceRouter.get("/rent", marketPriceController.findRentMarketPrice);

module.exports = marketPriceRouter;
