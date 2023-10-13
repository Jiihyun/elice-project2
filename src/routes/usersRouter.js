const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersMiddleware = require("../middlewares/usersMiddleware");

const usersRouter = Router();

usersRouter.delete("/", usersMiddleware.mustLoggedIn, usersController.withdraw);

usersRouter.patch(
  "/",
  usersMiddleware.mustLoggedIn,
  usersMiddleware.checkUpdatedUser,
  usersController.updateUser
);

usersRouter.get("/", usersMiddleware.mustLoggedIn, usersController.getUser);

module.exports = usersRouter;
