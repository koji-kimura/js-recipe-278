// タッチ操作時のイベントの発生情報を取得したい
// 自前のフリック処理を実現するとき
// タッチ位置に要素を動かすとき

const targetBox = document.querySelector(".box");

// ログ
const log = document.querySelector(".log");

// 画像上でタッチ位置を移動したら、ログを表示
targetBox.addEventListener("touchmove", () => {
  const touch = event.changeTouches;
  log.innerHTML = `
    ${touch[0].pageX.toFixed(2)}<br>
    ${touch[0].pageY.toFixed(2)}
  `;
});
