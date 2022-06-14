const http = require("http");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { log } = require("console");

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
//================회원가입========================
app.post("/users/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    //회원가입 API custom 예외처리
    // console.log("email: ", email, "password: ", password);

    //비밀번호가 8글자 미만일 때
    if (password.length < 10) {
      const error = new Error("PASSWORD_TOO_SHORT");
      error.statusCode = 400;
      throw error;
    }

    //중복된 email일 떄
    const checkDuplicate = await prisma.$queryRaw`
    SELECT users.email FROM users WHERE email=${email}`;
    if (checkDuplicate.length !== 0) {
      const error = new Error("EXSITING_USER");
      error.statusCode = 409;
      throw error;
    }

    const createdUser = await prisma.$queryRaw`
        INSERT INTO users(email, password) VALUES (${email}, ${password});`;

    return res.status(201).json({ message: "SIGNUP_SUCCESS" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
});

//=================포스팅 리스트 read=======================

app.get("/postings", async (req, res) => {
  try {
    const postings = await prisma.$queryRaw`
    SELECT 
    postings.id, 
    postings.contents, 
    users.nickname
  FROM users 
  JOIN postings ON postings.user_id = users.id;
  `;

    //nickname을 usernamd으로 바꾸는 방법 1.sql에서 바꾸기(AS username)
    //2.for loop 객체의 key값 바꾸기
    // for (i = 0; i < postings.length; i++) {
    //   const posting = postings[i];
    //   posting.username = posting.nickname;
    //   delete posting.nickname;
    // }

    //3.map
    // postings.map((posting) => {
    //   posting.username = posting.nickname;
    //   delete posting.nickname;
    // });

    //4.spread연산자...

    return res.status(201).json({ data: postings });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

//================포스팅 상세정보 read========================
app.get("/postings/2", async (req, res) => {
  try {
    const posting = await prisma.$queryRaw`
        SELECT
          postings.id AS postingId,
          postings.contents,
          comments.id AS commentId,
          users.nickname AS username,
          comments.comment
        FROM
          users
        JOIN postings ON postings.user_id = users.id
        JOIN comments ON comments.posting_id = postings.id
        WHERE postings.id = 2;
          `;

    return res.status(201).json({ data: posting });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

//==================포스팅 작성하기 create======================

app.post("/postings", async (req, res) => {
  try {
    const { user_id, contents } = req.body;
    console.log("User id: ", user_id, "Contents: ", contents);

    const createdPostings3 = await prisma.$queryRaw`
      INSERT INTO postings(user_id, contents) VALUES (${user_id},${contents});`;

    return res.status(201).json({ message: "CREATED", post: createdPostings3 });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});
//==================포스팅 수정하기(update)======================

app.put("/postings/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const modifyPosting = await prisma.$queryRaw`
    UPDATE postings SET contents='실력이 늘고있어요' WHERE id=2;`;

    return res.status(200).json({ message: "UPDATED" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});
//================포스팅 삭제하기delete========================

app.delete("/postings/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletePosting = await prisma.$queryRaw`
    DELETE FROM postings WHERE id=${id};`;

    return res.status(200).json({ message: "DELETED" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});
//========================================
const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`));
  } catch (err) {
    console.error(err);
  }
};
//========================================

start();
