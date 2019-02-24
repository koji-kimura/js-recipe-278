// 日付・時刻値を加算・原産したい
// - 1日後の日付を知りたい時
// - 月をまたぐ場合の日付を知りたい時

const date = new Date("2018/06/01");
date.setMonth(date.getMonth() - 1);
console.log(date.toLocaleDateString());

date.setDate(date.getDate() + 60);
console.log(date.toLocaleDateString());
