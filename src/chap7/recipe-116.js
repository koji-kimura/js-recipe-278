// 設定したイベントリスナーを削除したい

const box = document.querySelector(".button");
box.addEventListener("click", onClickButton);

// 3秒後にイベントリスナーを削除したい
setTimeout(() => {
  box.removeEventListener("click", onClickButton);
});

function onClickButton() {
  alert("ボタンが押されました");
}
