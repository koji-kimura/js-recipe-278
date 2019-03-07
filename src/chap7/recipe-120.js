// マウスオーバー時に処理をしたい
document.querySelector(".box").addEventListener("mouseenter", () => {
  console.log(".box要素上にポインティングデバイスが乗った");
});

document.querySelector(".box").addEventListener("mouseleave", () => {
  console.log(".box要素上にポインティングデバイスが離れた");
});
