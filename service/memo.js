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

exports.update = async (id, checked) => {
  //引数で渡されたidがdbの_idとして有効なフォーマットか
  //ObjectIdは「24バイトの16進数」「12バイトのバイナリ、数値」である必要がある
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //usecase,controllerにエラーを渡す
    throw new Error("invalid memo id");
  }
  try {
    const memo = await model.memo.findOneAndUpdate(
      //更新させたいドキュメントを指定。引数のidを入れる
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      //更新する内容を指定。checkedのみを更新する($set)
      { $set: { checked } },
      //クエリ実行時のオプションを指定。upsertは第一引数で指定したデータがなかったときにデータを作成するか？
      { upsert: false }
    );
    //更新したドキュメントがなかった時は、指定したidが最初から無かったということでエラーを返す
    //findOneAndUpdateの返り値はnullが適用されるルール
    if (memo == null) {
      //usecase,controllerにエラーを渡す
      throw new Error("memo not found");
    }
  } catch (error) {
    throw error;
  }
};
