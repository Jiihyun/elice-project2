const { verifyToken } = require("../misc/tokenUtils");
const { validateUser } = require("../misc/userValidationUtils");
const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");

function checkToken(req, res, next) {
  //토큰 만드는데 시간이 별로 안 걸리므로 비동기 처리 굳이 안 해줘도 됨)
  // const token = req.cookies.token;
  const token = req.headers.authorization?.slice(7);
  console.log(req.headers.authorization);
  if (token) {
    const payload = verifyToken(token);
    req.userId = payload.userId;
    // console.log("checkToken");
    // console.log(payload);
  }
  next();
}

function mustLoggedIn(req, res, next) {
  //토큰 만드는데 시간이 별로 안 걸리므로 비동기 처리 굳이 안 해줘도 됨)
  // const token = req.cookies.token;
  const token = req.headers.authorization?.slice(7);

  try {
    if (!token || token === null || token === undefined || token === "") {
      throw new Error("로그인이 되지 않았습니다.");
    }
    const payload = verifyToken(token);
    // 토큰이 유효한 경우 성공 -> req.userId에 사용자 ObjectId 저장 -> 그거로 DB에서 로그인 된 사용자의 정보 조회 가능
    req.userId = payload.userId;
    next();
  } catch (err) {
    // 로그인 안 됨 or 유효하지 않은 토큰
    next(new AppError(commonErrors.authenticationError, 401, err.message));
  }
}

async function checkUpdatedUser(req, res, next) {
  const { email, password, phoneNumber, name } = req.body;
  try {
    validateUser({ email, password, phoneNumber, name });
  } catch (err) {
    return next(new AppError(commonErrors.inputError, 400, err.message));
  }
  next();
}

module.exports = {
  checkToken,
  mustLoggedIn,
  checkUpdatedUser,
};
