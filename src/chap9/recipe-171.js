// ラジオボタンの変更を検知したい
// ラジオボタンの変更を検知したい時

// フォーム要素
const element = document.querySelector("form#radioGroup");

element.addEventListener("change", handleChange);

function handleChange(event) {
  // 現在の選択状態を取得
  const drinkValue = element.drink.value;
  const fruitValue = element.fruit.value;

  console.log(`drinkの値は${drinkValue}です`);
  console.log(`fruitの値は${fruitValue}です`);
}
