// 日付を取得したい
// 日付を画面に表示する時
// 日付を元に処理をする時
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const label = `${month}月${day}日`;

// htmlに文字を挿入する
document.querySelector("#app").innerHTML = `今日は${label}です`;
