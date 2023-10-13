const { validateUser } = require("../misc/userValidationUtils");
const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");
const userDAO = require("../data-access/userDAO");
const { comparePassword } = require("../misc/hashUtils");

async function checkValidatedUser(req, res, next) {
  const { email, password, phoneNumber, name } = req.body;
  try {
    const exists = await userDAO.existsByEmail({ email });
    if (exists !== null && exists !== undefined) {
      return next(
        new AppError(
          commonErrors.inputError,
          400,
          "이미 존재하는 이메일입니다."
        )
      );
    }
    validateUser({ email, password, phoneNumber, name });
  } catch (err) {
    return next(new AppError(commonErrors.inputError, 400, err.message));
  }
  next();
}

async function checkLogin(req, res, next) {
  const { email, password } = req.body;
  const foundUser = await userDAO.findByEmail({ email });
  if (foundUser === null || foundUser === undefined) {
    return next(
      new AppError(commonErrors.inputError, 400, "존재하지 않는 이메일입니다.")
    );
  }
  const isMatched = await comparePassword(password, foundUser.password);
  if (!isMatched) {
    return next(
      new AppError(commonErrors.inputError, 400, "잘못된 비밀번호 입니다.")
    );
  }
  next();
}

module.exports = { checkValidatedUser, checkLogin };
