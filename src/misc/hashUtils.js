const bcrypt = require("bcrypt");

async function hashPassword(plainPassword) {
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  return hashedPassword;
}

async function comparePassword(plainPassword, hashedPassword) {
  const comparedPassword = await bcrypt.compare(plainPassword, hashedPassword);
  return comparedPassword;
}

module.exports = {
  hashPassword,
  comparePassword,
};
