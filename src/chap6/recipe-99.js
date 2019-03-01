// デバイスのピクセル比を取得
const dpr = window.devicePixelRatio;

// キャンバスの論理的な大きさ
const w = 200;
const h = 200;

const canvas = document.querySelector("canvas");
canvas.width = w * dpr;
canvas.height = h * dpr;
canvas.style.width = w + "px";
canvas.style.height = h + "px";

const context = canvas.getContext("2d");
// スケールを設定
context.scale(dpr, dpr);

// 円を描く
context.fillStyle = "red";
context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI);
context.fill();

// 画面上にログを表示させる
document.querySelector(
  ".log"
).innerHTML = `現在のデバイスピクセル比は${dpr}です`;
