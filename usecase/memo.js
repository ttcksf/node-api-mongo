const service = require("../service");
exports.getAll = async () => {
  try {
    //"/service/memo.js"で作ったgetAll()を使って定数memosに格納
    const memos = await service.memo.getAll();
    return memos;
  } catch (error) {
    //controllerまでエラーを投げる
    throw error;
  }
};

exports.create = async (message, checked) => {
  try {
    await service.memo.create(message, checked);
  } catch (error) {
    throw error;
  }
};
