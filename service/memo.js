const model = require("../model");

exports.getAll = () => {
  //modelフォルダで作ったmodelを使って全権取得してmemosに格納する
  const memos = model.memo.find({}) || [];
  return memos;
};
