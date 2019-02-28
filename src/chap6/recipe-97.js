// ウィンドウサイズをシベ対
window.addEventListener("resize", resizeHander);

function resizeHander(event) {
  // 新しい画面幅
  const w = innerWidth;
  // 新しい画面の高さ
  const h = innerHeight;

  document.querySelector(".value-width").innerHTML = `横幅${w}px`;
  document.querySelector(".value-height").innerHTML = `縦幅${h}px`;
}
