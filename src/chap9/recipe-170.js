// ラジオボタンの情報を取得したい
// ラジオボタンの選択状態を調べた時

// フォーム要素

const element = document.querySelector("form#radioGroup");

// 現在の選択状態を取得
const drinkValue = element.drink.value;
const fruitValue = element.fruit.value;

console.log(`drinkの値は${drinkValue}です`);
console.log(`fruitの値は${fruitValue}です`);
