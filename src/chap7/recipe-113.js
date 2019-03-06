// ユーザー操作に合わせて発生する「イベント」について知りたい
// ユーザー操作時に処理を実行したい時

const button = document.querySelector(".button");
button.addEventListener("click", onClickButton);

function onClickButton() {
  console.log("クリックされました");
}
