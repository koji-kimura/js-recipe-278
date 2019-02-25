// 制限時間のカウントダウンを作りたい時

const totalTime = 10000;
const oldTime = Date.now();

const timerId = setInterval(() => {
  const currentTime = Date.now();
  // 差分を求める
  const diff = currentTime - oldTime;

  // 残りのミリ秒を計算する
  const remainMSec = totalTime - diff;

  // ミリ秒を整数の秒数に変換する
  const remainSec = Math.ceil(remainMSec / 1000);

  let label = `残り${remainSec}秒`;
  // 0秒になったら
  if (remainMSec <= 0) {
    clearInterval(timerId);
    //タイマーの終了文言
    label = "終了";
  }
  // 画面に表示する
  document.querySelector("#app").innerHTML = label;
}, 1000);
