// 親要素のの末尾に要素を追加したい
// 動的に表示要素を増やしたいとき
// モーダルウィンドウを画面上に追加したとき
const container = document.querySelector(".container");
const myBox = document.querySelector("#myBox");

// 3病後に#myBox要素を.container要素の末尾に追加する
setTimeout(() => {
  container.append(myBox);
}, 3000);
