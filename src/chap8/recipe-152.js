// 要素のテキストを取得したり、書き換えたりしたい
// htmlのテキストを書き換えたい時

// ノード.textContent
const weatherInfomation = document.querySelector("#weather-information");

// 以下の文字列が出力される
// くもり
console.log(weatherInfomation.textContent);

const weatherElement = document.querySelector("#weather");

setTimeout(() => {
  weatherElement.textContent = "気温は24度の予想です";
}, 3000);
