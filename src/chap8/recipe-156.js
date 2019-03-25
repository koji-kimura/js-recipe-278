// ページ内のaタグで_blankになっているものに「rel="noopener"」を付与したい
// 安全に_blankを使いたい時

// a要素を一括で取得する
const aElementList = document.querySelectorAll("a");

// 各a要素について処理する
aElementList.forEach(element => {
  // aタグにtarget属性が存在しなかったらreturn
  if (element.hasAttribute("target") === false) {
    return;
  }

  // target属性_blankがなかったらreturn
  if (element.getAttribute("target") !== "_blank") {
    return;
  }

  // rel属性にnoopernerを付与する
  element.setAttribute("rel", "noopener");
});
