const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const mongoose = require("mongoose");
const controller = require("./controller/index.js");

//useはミドルウェアと言い、処理を行う前や行なった後に実施する関数
//APIのリクエストをreq.bodyとして受け取れるようにしている。
app.use(express.json());
//ログの出力をmorganライブラリで行う
app.use(morgan("common"));
mongoose.connect("mongodb://localhost:27017/memoApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//"/memo"というリクエストが来たときにcontroller.memo()というrouterに処理を渡す
app.use("/memo", controller.memo());

app.listen(port, () => {
  console.log("example app listening");
});
