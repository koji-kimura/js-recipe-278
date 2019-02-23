// 時刻を取得したい
// - 現在の時刻を使いたい時
// - デジタル時計として表示する時

const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

document.querySelector("#app").innerHTML = `${date}${hour}${minutes}${seconds}`;
