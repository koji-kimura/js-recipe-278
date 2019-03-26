// 要素のクラスの有無を切り替えたい
// クラスを動的につけたり外したりしたい時

const box = document.querySelector("#box");
setInterval(() => {
  box.classList.toggle("aaa");
}, 1000);
