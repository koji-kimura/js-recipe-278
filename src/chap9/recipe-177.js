// カラーピッカーの変更を検知したい
// カラーピッカーの変更時に処理をしたい時

// change

const cbA = document.querySelector("#myColor");

cbA.addEventListener("change", event => {
  // 選択された色を確認する
  const value = event.target.value;
  // 画面上に表示する
  const log = `選択された色が${value}になりました`;
  const logEl = document.querySelector(".log");
  logEl.innerHTML = log;
  logEl.style.backgroundColor = value;
});
