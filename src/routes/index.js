const { Router } = require("express");
const authRouter = require("./authRouter");
const usersRouter = require("./usersRouter");
const marketPriceRouter = require("./marketPriceRouter");
const districtsRouter = require("./districtsRouter");
const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/marketPrice", marketPriceRouter);
apiRouter.use("/districts", districtsRouter);

districtsRouter;

module.exports = apiRouter;
