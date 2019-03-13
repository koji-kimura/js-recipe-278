// 入力されたキーを調べたい
// 入力された文字に応じて処理を行いたい時

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  // キーコードを取得
  const keyCode = event.keyCode;

  // 制御文で制御する
  if (keyCode === 39) {
    //右
    console.log("右");
  }
  if (keyCode === 37) {
    //右
    console.log("左");
  }
  if (keyCode === 38) {
    //右
    console.log("上");
  }
  if (keyCode === 40) {
    //右
    console.log("下");
  }
}
