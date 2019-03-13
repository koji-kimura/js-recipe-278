// 画面のサイズが変更になった時に処理をしたい
// ウィンドウサイズが大きい時、小さい時で処理を分けたい時

// リサイズ時にレイアウトを調整したい時

// ウィンドウの幅を表示する要素
const widthLog = document.querySelector("#widthLog");
const heightLog = document.querySelector("#heightLog");

// ウィンドウがリサイズされるたびに処理を実行する
window.addEventListener("resize", () => {
  widthLog.innerText = `${window.innerWidth}px`;
  heightLog.innerText = `${window.innerHeight}px`;
});
