const usecase = require("../usecase");

exports.getAll = (req, res, next) => {
  //"usecase/memo.js"で作ったgetAll()を使ってmemosという定数に格納
  const memos = usecase.memo.getAll();
  return res.status(200).send({ memos: memos });
};
