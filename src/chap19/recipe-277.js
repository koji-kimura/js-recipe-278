// キーと値のコレクション「map」を使いたい
// キーと値を組み合わせて使いたい時
// 連想配列を扱いたい時
// Mapオブジェクトはキーと値を組み合わせて複数のデータをまとめて取り扱うもの

// マップの初期化
// map使う利点はいろいろメソッド使えて便利だから
// const memberList = new Map();

// // マップに値を設定する
// memberList.set(20, "鈴木");
// memberList.set(50, "田中");
// memberList.set(120, "高橋");
// memberList.set(20, "高橋");
const memberList = new Map([[20, "鈴木"], [50, "田中"], [120, "高橋"]]);

console.log(memberList.get(20));
console.log(memberList.get(50));
