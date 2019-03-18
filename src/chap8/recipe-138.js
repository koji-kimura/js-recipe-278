// セレクタ名に該当する要素をまとめて取得したい
// セレクタ名を該当する要素をまとめて取得し、処理したい時

// const nodeList = document.querySelectorAll(".box");
const boxList = document.querySelectorAll(".box");
const boxLength = boxList.length;

for (let index = 0; index < boxLength; index++) {
  // 各box要素が出力される
  console.log(boxList[index]);
}

document.querySelectorAll(".box").forEach(targetBox => {
  // .box要素をクリックした時の処理
  targetBox.addEventListener("click", () => {
    // クリックされた.box要素のテキスト表示
    alert(`${targetBox.textContent}がクリックされました`);
  });
});
// nodeList.forEach(targetBox => {
//   console.log(boxList[index]);
// });
