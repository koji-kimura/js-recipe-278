// イベントを発火させたい
// 非同期処理のタイミングを通知させたい時
// dispatchEven()メソッドはイベントターゲットに対して任意のイベントで発生させる

const boxElement = document.querySelector("#myBox");

boxElement.addEventListener("click", () => {
  boxElement.innerHTML = "クリックされました";
});

setTimeout(() => {
  boxElement.dispatchEvent(new Event("click"));
}, 3000);
