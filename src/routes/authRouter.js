const { Router } = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const authRouter = Router(); //1, 4번째 줄 코드를 통해 모듈화 가능

authRouter.post(
  "/signup",
  authMiddleware.checkValidatedUser,
  authController.signup
);
authRouter.post("/login", authMiddleware.checkLogin, authController.login);

module.exports = authRouter;
