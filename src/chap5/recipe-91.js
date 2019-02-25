// 経過時間を調べたい
// データ通信の時間を計測したい時
// js処理時刻を計測したい時

// const sec = Math.floor(diff / 1000);

const oldTime = Date.now();
setInterval(() => {
  const currentTime = Date.now();
  //経過したミリ秒を取得
  const diff = currentTime - oldTime;
  // 秒数を得る
  const sec = Math.floor(diff / 1000);

  document.querySelector("#app").innerHTML = `${sec}秒が経過`;
}, 1000);
