// デフォルトのイベントをキャンセルしたい
// マウスホイールを無効化したいとき
// タッチ操作を無効化したい時
// preventDefault()メソッドを実行するとイベントのデフォルトの挙動がキャンセルされる

// マウスホイールを有効にするかどうか
let enableMouseWheel = true;

// チェックボックスをクリックした時の処理
document.querySelector("#mouseWheelToggle").addEventListener("click", event => {
  // チェックボックスに値が入っていたらマウスホイールを無効化する
  enableMouseWheel = event.target.checked = false;
});

// スクロール可能な要素上でマウスホイールした時の処理
// document.querySelector(".scrollable-element").addEventListener("wheel", event);
