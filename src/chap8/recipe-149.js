// 要素を複製したい
// ユーザークリックごとに要素を増やしたい時

setTimeout(() => {
  const clonedBox = document.querySelector("#myBox").cloneNode(true);
  document.querySelector(".container").appendChild(clonedBox);
}, 3000);
