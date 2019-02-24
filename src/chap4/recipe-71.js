//オブジェクトの各地について処理をしたい
const userData = {
  id: 1,
  name: "田中",
  age: 26
};

// キーごとにループ
console.log(Object.keys(userData));
// 値ごとにループ
console.log(Object.values(userData));
// プロパティ毎にループ
console.log(Object.entries(userData));
