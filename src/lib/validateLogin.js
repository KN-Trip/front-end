const isIdValidate = (id) => {
  if (id.length === 0) {
    return false;
  }

  return true;
};

const isPasswordValidate = (pw) => {
  if (pw.length === 0) {
    return false;
  }

  let reg_pwd = /^.*(?=.{8,10})(?=.*[0-9])(?=.*[a-zA-Z]).*$/; // 8 ~ 10 글자수의 영문, 숫자 판별 정규식

  if (!reg_pwd.test(pw)) {
    return false;
  }

  return true;
};

export const validateLogin = (id, password) => {
  if (!isIdValidate(id)) {
    return false;
  }

  if (!isPasswordValidate(password)) {
    return false;
  }

  return true;
};
