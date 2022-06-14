const { readUser, createUser } = require("../models/userDao");

async function signup(email, password) {
  const { email, password } = req.body;
  const checkDuplicate = await readUser(email);

  //비밀번호가 8글자 미만일 때
  if (password.length < 10) {
    const error = new Error("PASSWORD_TOO_SHORT");
    error.statusCode = 400;
    throw error;
  }

  //중복된 email일 떄
  if (checkDuplicate.length !== 0) {
    const error = new Error("EXSITING_USER");
    error.statusCode = 409;
    throw error;
  }

  await createUser(email, password);
}

module.exports = { signup };
