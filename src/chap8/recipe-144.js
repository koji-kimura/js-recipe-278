// 要素の前後に別の要素を追加したい

// html要素の挿入箇所を細かく指定したい

const myBox1 = document.querySelector("#myBox1");
const myBox2 = document.querySelector("#myBox2");
const targetBox = document.querySelector("#targetBox");

// 4秒後に#myBox1要素を#targetBoxの前に追加する
setTimeout(() => {
  targetBox.before(myBox1);
}, 3000);

// 4秒後に#myBox1要素を#targetBoxの後に追加する
setTimeout(() => {
  targetBox.after(myBox2);
}, 3000);
