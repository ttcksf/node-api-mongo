const service = require("../service");
exports.getAll = () => {
  //"/service/memo.js"で作ったgetAll()を使って定数memosに格納
  const memos = service.memo.getAll();
  return memos;
};
