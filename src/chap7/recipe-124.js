// テキスト選択時に処理をしたい
// テキスト選択時に処理を行う時
// テキスト選択処理を無効化する時

// let x = 1;
// document.querySelector(".paragraph").addEventListener("selectstart", () => {
//   console.log(x + "回テキストが選択された");
//   x++;
// });

// 吹き出し用の要素
const balloon = document.querySelector("#balloon");
// 対象の文字列の要素
const paragraph = document.querySelector(".paragraph");

// 選択開始した時の処理
paragraph.addEventListener("selectstart", () => {
  // マウスを話した時の処理
  paragraph.addEventListener("mouseup", event => {
    //選択されている文字列を取得する
    const selectionCharacters = window.getSelection().toString();
    if (selectionCharacters.length > 0) {
      balloon.innerHTML = selectionCharacters;
      balloon.classList;
    }
  });
});
