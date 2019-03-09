// マウス操作時の座標を取得したい
// マウスクリックの位置を取得したいとき
// マウスの動きに合わせて要素を動かしたいとき

// targetBox.addEventLister("mousemove", event => {
//   console.log(event.clientX, event.clientY);
// });

// 動かしたいキャラクタ
const character = document.querySelector(".character");

// ページ上でマウスボタンを押したらキャラクタの移動開始

document.addEventListener("mousemove", () => {
  document.addEventListener("mousemove", onMouseMove);

  // ページ上でマウスボタンを話したらキャラの移動完了
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
  });
});

// マウスがうご書いた時の処理
function onMouseMove(event) {
  character.style.left = `${event.clientX - 100}px`;
  character.style.top = `${event.clientY - 100}px`;
}
