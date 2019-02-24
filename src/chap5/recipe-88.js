//　Dateインスタンスに別の日時を設定したい
// 日付や時刻を設定したい時

const date1 = new Date("2018/06/12 20:01:10");
const date2 = new Date("Tue Jun 12 2018 20:01:10");

const date3 = new Date(2018, 5, 12, 20, 1, 10);

const date4 = new Date(1528801270000);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);

const date = new Date();
// 日時の設定
date.setFullYear(2015);
date.setMonth(0);
date.setDate(1);
date.setMinutes(0);
date.setMinutes(0);
date.setSeconds(0);

document.querySelector("#app").innnerHTML = date.toLocaleString();
