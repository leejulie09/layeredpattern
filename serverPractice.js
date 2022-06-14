const http = require("http");
const express = require("express");
const { sendProducts } = require("./sendProducts2");

const { sendPostings } = require("./posting");
const { sendPostings2 } = require("./posting2");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

app.post("/signup", (req, res) => {
  res.json("signup success");
}); // 첫번째 인자에는 endpoint url 을 기입하고,

app.post("/login", (req, res) => {
  res.json("login success");
}); // 각각의 요청에 대해 핸들링 하는 함수를 두번째 인자로 넣습니다.

app.get("/products", sendProducts);

app.get("/posting", sendPostings);
app.get("/posting2", sendPostings2);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
