// タイトルを書き換えたい
// タイトルを動的に書き換えたい時
// チャットアプリで未読数をタイトルバーに表示させる時

document.querySelector("#btnApple").addEventListener("click", () => {
  document.title = "アップル";
});
document.querySelector("#btnOrange").addEventListener("click", () => {
  document.title = "オレンジ";
});
