const model = require("../model");
const mongoose = require("mongoose");

exports.getAll = async () => {
  try {
    //modelフォルダで作ったmodelを使って全権取得してmemosに格納する
    const memos = (await model.memo.find({})) || [];
    return memos;
  } catch (error) {
    //controllerまでエラーを投げる
    throw error;
  }
};

exports.create = async (message, checked) => {
  try {
    await model.memo.create({
      //IDを自動生成する関数
      _id: mongoose.Types.ObjectId(),
      message,
      checked,
    });
    return;
  } catch (error) {
    throw error;
  }
};
