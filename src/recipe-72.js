//複数の変数にまとめて値を代入したい
const userData = {
  id: 1,
  name: "田中",
  age: 26
};

const { id, name, age } = userData;

console.log(id);
console.log(name);
console.log(age);
