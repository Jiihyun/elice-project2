const userService = require("../service/userService");
const util = require("../misc/util");

async function withdraw(req, res) {
  const { password } = req.body;
  const userId = req.userId;
  try {
    await userService.withdraw({
      userId,
      password,
    });
    res.json(util.buildResponse(null, null, 204));
  } catch (err) {
    res.status(400).send(err.message);
  }
}

async function updateUser(req, res) {
  const { email, name, password, phoneNumber, role } = req.body;
  const userId = req.userId;
  try {
    const updatedUser = await userService.updateUser({
      userId,
      email,
      name,
      password,
      phoneNumber,
      role,
    });
    const updatedUserDTO = {
      ...updatedUser,
    };
    delete updatedUserDTO["password"];
    res.json(util.buildResponse(updatedUserDTO, null, 200));
  } catch (err) {
    res.status(400).send(err.message);
  }
}

async function getUser(req, res) {
  const userId = req.userId;
  try {
    const user = await userService.getUser({ userId });
    res.status(200).json(util.buildResponse(user, null, 200));
  } catch (err) {
    res.status(400).send(err.message);
  }
}

module.exports = { withdraw, updateUser, getUser };
