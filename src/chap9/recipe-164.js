// テキストエリアの変更を検知したい
// テキストエリアの変更時に処理したい時

//change
//input

const element = document.querySelector("#myText");
// イベントを登録
element.addEventListener("input", handleChange);

function handleChange(event) {
  // 値を取得
  const value = event.target.value;

  const htmlStr = value.split("\n").join("<br>");
  document.querySelector(".log").innerHTML = htmlStr;
}
