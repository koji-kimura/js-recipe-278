// クラス名に一致する要素を全て取得したい

// クラス名に一致する要素を全て取得したい時
const boxList = document.getElementsByClassName("box");
const boxLength = boxList.length;

for (let index = 0; index < boxLength; index++) {
  // 各box要素が出力される
  console.log(boxList[index]);
}
