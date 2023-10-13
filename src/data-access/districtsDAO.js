const { Districts } = require("./models/districts");
const { Dongs } = require("./models/dongs");

// {
//   1244: [{ id: 123, name: '삼성동' }, ...],
//   1245: [{ id: 244, name: '목2동' }, {}, {}, {}],
// }

async function findDistricts() {
  try {
    const districts = await Districts.find().lean();
    return districts;
  } catch (err) {
    console.log(err.message);
  }
}

async function findDongs({ districtName }) {
  // object destructuring
  try {
    const dongs = await Dongs.find({ districtName }).lean();
    return dongs;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { findDistricts, findDongs };
