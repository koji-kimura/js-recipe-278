// 曜日を取得したい
// - 曜日を表示したい時
// - 日付の情報から曜日を調べたい時
const date = new Date();
const day = date.getDay();
const dayList = ["日", "月", "火", "水", "木", "金", "土"];
console.log(dayList[day]);
document.querySelector("#app").innerHTML = `今日は${dayList[day]}曜日です`;
