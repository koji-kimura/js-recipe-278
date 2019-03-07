// マウスを押した時や動かした時に処理をしたい
// マウスのドラッグに合わせて画像をアニメーションさせたい時
// フリック操作を実現したい時

const logArea = document.querySelector("#log2");

// 対象エリア上でマウスボタンを押したらログを出力
logArea.addEventListener("mousedown", () => {
  logArea.innerHTML = "マウスボタンを押した";
});
logArea.addEventListener("mouseup", () => {
  logArea.innerHTML = "マウスボタンを離した";
});
logArea.addEventListener("mousemove", () => {
  logArea.innerHTML = "マウスボタンを移動した";
});
