// キーボード入力時に処理をしたい
// テキストエリア

const textarea = document.querySelector(".textarea");
const string_num = document.querySelector(".string_num");

// テキストを入力するたびにonKeyup()を実行する
textarea.addEventListener("keyup", onkeyup);

function onkeyup() {
  // 入力されたテキスト
  const inputText = textarea.value;
  string_num.innerText = inputText.length;
}
