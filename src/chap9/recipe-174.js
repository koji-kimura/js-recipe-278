// スライダーの情報を取得したい

// スライダーの値を調べたい時
// スライダーの変更した時

const element = document.querySelector("#myRange");

// 現在の値を取得
const value = element.value;

// 画面に表示
document.querySelector(".log").innerHTML = `現在の値は${value}です`;
