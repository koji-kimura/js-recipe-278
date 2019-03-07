// イベントリスナーを1度だけ呼び出したい

const option = {
  once: true
};

document
  .querySelector(".button")
  .addEventListener("click", onClickButton, option);

function onClickButton() {
  alert("ボタンが押されました");
}
