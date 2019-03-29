// チェックボックスの変更を検知したい
// チェックボックスの変更時に処理したい時

const cb = document.querySelector("#cbA");

cb.addEventListener("change", event => {
  // 選択状態を確認する
  const value = event.target.checked;

  const log = `チェックボックスAは ${value} になりました`;
  document.querySelector(".log").innerHTML = log;
});
