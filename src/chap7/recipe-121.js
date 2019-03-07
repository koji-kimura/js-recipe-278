// マウスオーバー時に処理をしたい（バブリングあり）

document.querySelector(".box").addEventListener("mouseover", () => {
  console.log(".box要素にポインティングデバイスが乗った");
});
document.querySelector(".box").addEventListener("mouseout", () => {
  console.log(".box上にポインティングデバイスが離れた");
});
