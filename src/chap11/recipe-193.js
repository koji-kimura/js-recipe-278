// 193 Webページ内の画像を遅延読み込みさせる
// 画像の読み込み中にローディングを表示したい時
// 画像の読み込み後、画像データに秋セスする時

const srcMap = new Map();
window.addEventListener("DOMContentLoaded", () => {
  // img要素を一括で参照
  const imgs = document.querySelectorAll("img");
  imgs.forEach(img => {
    // 各img要素のdata-srcをMapに保存
    srcMap.set(img.dataset.src);
    //遅延読み込みのためにからにしておく
    img.removeAttribute("src");
  });
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  // img要素を一括で参照
  const imgs = document.querySelector(".btn");
  imgs.forEach(img => {
    // 保存していたMapからsrcを割り当てる
    const source = srcMap.get(img);
    img.src = source;
  });
});
