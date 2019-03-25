//　要素のクラス属性の追加や削除をしたい

// クラスを追加したい時
// クラスを外したい時
// クラスが含まれるか調べたい時

const box = document.querySelector("#box");

box.classList.add("blue");
box.classList.remove("red");

// クラスの一括追加
box.classList.add("blue", "yellow", "pink");

// クラスの一括削除
box.classList.remove("blue", "yellow");

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

console.log(box1.classList.contains("red"));
console.log(box2.classList.contains("red"));
