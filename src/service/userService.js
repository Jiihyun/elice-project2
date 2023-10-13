const userDAO = require("../data-access/userDAO");
const hashUtils = require("../misc/hashUtils");

async function withdraw({ userId, password }) {
  const foundUser = await userDAO.findById({ userId });
  if (foundUser === null || foundUser === undefined) {
    throw new Error("존재하지 않는 회원입니다");
  }

  const isMatchedPassword = await hashUtils.comparePassword(
    password,
    foundUser.password
  );

  if (!isMatchedPassword) {
    throw new Error("잘못된 비밀번호로 탈퇴가 불가합니다");
  }
  await userDAO.deleteById({ id: foundUser.id });
}

async function updateUser({
  userId,
  email,
  name,
  password,
  phoneNumber,
  role,
}) {
  const updateparams = { email, name, password, phoneNumber, role };
  const updatedUser = await userDAO.update({ userId, updateparams });
  if (email !== null && email !== undefined) {
    updateparams.email === email;
  }
  if (name !== null && name !== undefined) {
    updateparams.name === name;
  }
  if (password !== null && password !== undefined) {
    updateparams.password === password;
  }
  if (phoneNumber !== null && phoneNumber !== undefined) {
    updateparams.phoneNumber === phoneNumber;
  }
  if (role !== null && role !== undefined) {
    updateparams.role === role;
  }
  return updatedUser;
}

async function getUser({ userId }) {
  const user = await userDAO.findById({ userId });
  return user;
}

module.exports = { withdraw, updateUser, getUser };
