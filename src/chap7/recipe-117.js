// ページが処理された時に処理がしたい
// DOMにアクセスできるタイミングで処理を実行する
// addEventListenerがないとすぐにjsが実装されてしまう
window.addEventListener("DOMContentLoaded", () => {
  const boxNum = document.querySelectorAll(".box").length;
  // ログ出力
  console.log(`.box要素の数は${boxNum}です`);
});
