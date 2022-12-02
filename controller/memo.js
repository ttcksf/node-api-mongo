const usecase = require("../usecase");

exports.getAll = async (req, res, next) => {
  try {
    //"usecase/memo.js"で作ったgetAll()を使ってmemosという定数に格納
    const memos = await usecase.memo.getAll();
    return res.status(200).send({ memos: memos });
  } catch (error) {
    return res
      .status(500)
      .send({ error: String(error), message: "error occured" });
  }
};

exports.create = async (req, res, next) => {
  //expressではreq.bodyでリクエストボディを取得できる
  const message = req.body.message ?? "";
  const checked = req.body.checked ?? false;

  try {
    await usecase.memo.create(message, checked);
    return res.status(200).send({});
  } catch (error) {
    return res
      .status(500)
      .send({ error: String(error), message: "error occured" });
  }
};
