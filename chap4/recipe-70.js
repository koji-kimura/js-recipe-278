//オブジェクトのプロパティがあるかどうかを調べたいときのコード
const userData = {
  id: 1,
  name: "田中",
  age: 26
};

console.log(userData.hasOwnProperty("id"));
console.log(userData.hasOwnProperty("address"));
console.log("id" in userData);
