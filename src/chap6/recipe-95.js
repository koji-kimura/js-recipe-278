// コンファームを表示したい
// はい、いいえをユーザーに選択させたい時
// 同期的にコンファームを表示させたい時

//ボタンの参照
const btn = document.querySelector("button");

// ボタンをクリックした時
btn.addEventListener("click", event => {
  // コンファームを表示
  const isYes = confirm("天気は晴れてますか？");
  document.querySelector(".log").innerHTML = isYes;
});
