const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env; //process.env는 객체임

function generateToken(payload) {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
}

function verifyToken(token) {
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
}

module.exports = {
  generateToken,
  verifyToken,
};
