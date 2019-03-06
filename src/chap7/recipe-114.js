// ユーザーの操作が怒った時に処理を行いたい
// イベント発生時の関数を指定したい時

const button = document.querySelector(".button");

// アロー関数を使う方法
button.addEventListener(
  "click",
  event => {
    console.log("ボタンがクリックされました");
    console.log(event);
  },
  10000
);
