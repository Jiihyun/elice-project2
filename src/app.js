require("dotenv").config(); //require("")하고 .config()를 해주면 -> process.env 객체에 추가 가능
const connectDB = require("./config/connectDB");
const { PORT } = process.env;
const apiRouter = require("./routes");
const express = require("express");
const cookieParser = require("cookie-parser");
const util = require("./misc/util");
const AppError = require("./misc/AppError");
const commonErrors = require("./misc/commonErrors");
const cors = require("cors");

connectDB(); //몽고DB 연결

const app = express();

// middleware 등록
// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", apiRouter);

app.use((_, __, next) => {
  next(
    new AppError(
      commonErrors.resourceNotFoundError,
      404,
      32,
      "Resource not found"
    )
  );
}); // ! 페이지를 따로 설정하지 않은 것들은 전부 404 에러가 표시되도록 함.

app.use((err, req, res, next) => {
  // console.log(err);
  const resp = util.buildResponse(null, err);
  // console.log(resp);
  res.status(resp.statusCode).json(resp);
}); // ! 전역 에러처리 미들웨어(상태코드는 비어 있으면 전달된 err의 코드가 자동으로 들어감)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
