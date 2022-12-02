const express = require("express");
const memo = require("./memo.js");

exports.memo = () => {
  const router = express.Router();
  //"/memo"以下のパスで良いので"/"にしている
  router.get("/", memo.getAll);
  router.post("/", memo.create);
  return router;
};
