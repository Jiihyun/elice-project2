const validator = require("validator");
const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const regName = /^[가-힣]{2,15}$/;

function validateUser({ email, password, phoneNumber, name }) {
  if (!validator.isEmail(email)) {
    throw new Error("이메일 양식이 잘못되었습니다.");
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minNumbers: 0,
      minLowercase: 0,
      minUppercase: 0,
      minSymbols: 1,
    })
  ) {
    throw new Error("비밀번호는 특수문자를 포함하여 8자리 이상이어야 합니다.");
  }
  if (!regPhone.test(phoneNumber)) {
    throw new Error("전화번호 양식이 잘못되었습니다.");
  }

  if (!regName.test(name)) {
    throw new Error("한글 이름만 입력해 주십시오.");
  }
}

module.exports = { validateUser };
