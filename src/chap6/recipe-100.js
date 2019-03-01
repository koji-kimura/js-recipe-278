// タッチができるか調べたい
// デスクトップブラウザとモバイルブラウザで処理を分けたい時
const isSupported = !!(
  "ontouchstart" in window ||
  (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
);

console.log(isSupported);
