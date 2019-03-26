// スタイルを取得したい
// 要素に適用しているスタイルを調べたい時

const box = document.querySelector("#box");

console.log(getComputedStyle(box).width);
