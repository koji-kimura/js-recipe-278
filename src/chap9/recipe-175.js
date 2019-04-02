// スライダーの変更を取得したい

// スライダーの変更時に処理したい時

const element = document.querySelector("#myRange");

element.addEventListener("input", handleChange);

function handleChange() {
  // 現在の値を取得
  const value = element.value;

  // 画面に表示
  document.querySelector(".log").innerHTML = `現在の値は${value}です`;
}
