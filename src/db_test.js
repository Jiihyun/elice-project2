require("dotenv").config(); //require("")하고 .config()를 해주면 -> process.env 객체에 추가 가능
const connectDB = require("./config/connectDB");
const {
  PropertyMarketPrice,
} = require("./data-access/models/propertyMarketPrice");
//몽고DB 연결

// 1.
async function main() {
  await connectDB();
  const data = await PropertyMarketPrice.find();
  // const data2 = await DongPropertyMarketPrice.find();
  // const data3 = await DistrictRentMarketPrice.find();
  // const data4 = await DongRentMarketPrice.find();
  // const data5 = await Districts.find();
  // const districts = await Districts.find({}).lean();
  // const data6 = await Dongs.find();
  console.log(data);
}

main();

// /marketPrice/district?type={monthlyRent,rent,property}&name={XX구}
// /marketPrice/dong?type={monthlyRent,rent,property}&name={XX동}
