const { User } = require("./models/userModel");
const { hashPassword } = require("../misc/hashUtils");

async function create({ email, name, password, phoneNumber, role }) {
  try {
    const hashedPassword = await hashPassword(password);
    const user = new User({
      email,
      name,
      password: hashedPassword,
      phoneNumber,
      role,
    });
    await user.save(); //수정 된 내용을 DB에 반영
    return user.toObject(); //lean 같은 거
  } catch (err) {
    throw new AppError(
      commonErrors.databaseError,
      500,
      err.name ?? err.message
    );
  }
}

async function existsByEmail(email) {
  try {
    const exists = await User.exists(email);
    // console.log(exists);
    return exists;
  } catch (err) {
    throw new AppError(
      commonErrors.databaseError,
      500,
      err.name ?? err.message
    );
  }
}

async function findByEmail(email) {
  try {
    const foundUser = await User.findOne(email);
    return foundUser;
  } catch (err) {
    console.log(err.message);
    throw new AppError(
      commonErrors.databaseError,
      500,
      err.name ?? err.message
    );
  }
}

async function deleteById(id) {
  try {
    await User.deleteOne(id);
  } catch (err) {
    console.log(err.message);
    throw new AppError(
      commonErrors.databaseError,
      500,
      err.name ?? err.message
    );
  }
}

async function update({ userId, updateparams }) {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateparams, {
      new: true,
    }).lean();
    return updatedUser;
  } catch (err) {
    console.log(err.message);
    throw new AppError(
      commonErrors.databaseError,
      500,
      err.name ?? err.message
    );
  }
}

async function findById(userId) {
  try {
    const foundUser = await User.findById(userId);
    return foundUser;
  } catch (err) {
    console.log(err.message);
    throw new AppError(
      commonErrors.databaseError,
      500,
      err.name ?? err.message
    );
  }
}

module.exports = {
  create,
  existsByEmail,
  findByEmail,
  deleteById,
  update,
  findById,
};
