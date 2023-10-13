const districtsDAO = require("../data-access/districtsDAO");

async function getdistricts() {
  const districts = await districtsDAO.findDistricts();
  return districts;
}

async function getdongs({ districtName }) {
  const dongs = await districtsDAO.findDongs({ districtName });
  return dongs;
}

module.exports = { getdistricts, getdongs };
