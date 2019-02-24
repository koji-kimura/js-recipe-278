// 日本式の表記の時刻を取得したい
// 簡易的に日付時刻情報を出力したい時
// 多言語の日付時刻表示を作りたい時
const date = new Date();
const locale = date.toLocaleString();
const localDate = date.toLocaleDateString();
const localeTime = date.toLocaleTimeString();
document.querySelector("#app").innerHTML = `${locale}<br>
${localDate}<br />
${localeTime}`;
