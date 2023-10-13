class AppError extends Error {
  constructor(name, statusCode, message) {
    super(message); // super는 Error를 뜻함.

    this.name = name;
    this.statusCode = statusCode ?? 500; //아무값 안 넣었을 때 500 뜸
    Error.captureStackTrace(this); // this는 AppError를 뜻함.
  }
}

module.exports = AppError;
