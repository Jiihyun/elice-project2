const { Router } = require("express");
const districtsController = require("../controllers/districtsController");
const districtsRouter = Router();

districtsRouter.get("/", districtsController.getdistricts);
districtsRouter.get("/dongs", districtsController.getdongs);

module.exports = districtsRouter;
