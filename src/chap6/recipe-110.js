// ページにフォーカスされているかを調べたい
// ページのフォーカスの有無を調べたい時
// ページにフォーカスが当たっている時だけ音楽を再生したい

window.addEventListener("focus", () => {
  document.querySelector("#log").innerHTML = "フォーカスが当たっている";
});

window.addEventListener("blur", () => {
  document.querySelector("#log").innerHTML = "フォーカスが外れてる";
});
