const userDAO = require("../data-access/userDAO");
const { comparePassword } = require("../misc/hashUtils");
const { generateToken } = require("../misc/tokenUtils");

async function signup({ email, name, password, phoneNumber, role }) {
  const user = await userDAO.create({
    email,
    name,
    password,
    phoneNumber,
    role,
  });
  // console.dir(user._id.toString());
  const payload = { userId: user._id };
  const token = generateToken(payload); //토큰의 실체는 user._id가 담긴 객체를 암호화한 문자열
  return token;
}

async function login({ email, password }) {
  const foundUser = await userDAO.findByEmail({ email });
  // // if (foundUser === null || foundUser === undefined) {
  // //   throw new Error("존재하지 않는 이메일입니다.");
  // // }
  // // const isMatched =
  // await comparePassword(password, foundUser.password);
  // // if (!isMatched) {
  // //   throw new Error("잘못된 비밀번호 입니다.");
  // // }
  const payload = { userId: foundUser._id };
  const token = generateToken(payload);
  return token;
}

module.exports = { signup, login };
