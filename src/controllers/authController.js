const authService = require("../service/authService");
const util = require("../misc/util");

//다른 서버(db)로 요청을 보내므로 비동기
async function signup(req, res) {
  const { email, name, password, phoneNumber, role } = req.body;
  try {
    const token = await authService.signup({
      email,
      name,
      password,
      phoneNumber,
      role,
    });
    // res.cookie("token", token);
    res.json(util.buildResponse(token, null, 200));
  } catch (err) {
    next(err);
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const token = await authService.login({
      email,
      password,
    });
    // res.cookie("token", token);
    res.json(util.buildResponse(token, null, 200));
  } catch (err) {
    next(err);
  }
}

module.exports = { signup, login };
