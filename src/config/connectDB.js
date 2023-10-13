const mongoose = require("mongoose");
const { MONGO_URL } = process.env;

async function connectDB() {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB에 정상적으로 연결되었습니다.");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB에 정상적으로 연결 해제되었습니다.");
  });
  mongoose.connection.on("error", (error) => {
    console.log(`Mongoose에서 에러가 발생하였습니다: ${error}`);
  });
  mongoose.set("strictQuery", true);
  await mongoose.connect(MONGO_URL, {
    minPoolSize: 4, // min pool size 설정
    maxPoolSize: 20, // max pool size 설정
  });
}

module.exports = connectDB;
