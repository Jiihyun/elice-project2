const districtsService = require("../service/districtsService");
const util = require("../misc/util");
const commonErrors = require("../misc/commonErrors");
const AppError = require("../misc/AppError");

// async function getdistricts(req, res) {
//   const {districtCode} = util.sanitizeObject(req.query);
//   try {
//     const dongs = await districtsService.getdongs({ districtCode });

//     res.status(200).json(util.buildResponse(dongs, null, 200));
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// }

async function getdistricts(req, res) {
  try {
    const districts = await districtsService.getdistricts();

    res.status(200).json(util.buildResponse(districts, null, 200));
  } catch (err) {
    throw new AppError(commonErrors.businessError, 400, err.message);
  }
}

async function getdongs(req, res) {
  const { districtName } = util.sanitizeObject(req.query);
  try {
    const dongs = await districtsService.getdongs({ districtName });

    res.status(200).json(util.buildResponse(dongs, null, 200));
  } catch (err) {
    throw new AppError(commonErrors.businessError, 400, err.message);
  }
}
module.exports = { getdistricts, getdongs };
