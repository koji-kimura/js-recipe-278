// 日付・時刻の差分を計算したい
// -  ２つの日付の差を求めたい場合
const dateA = new Date("2018/06/01");
const dateB = new Date("2018/05/01");
const diffMsec = dateA.getTime() - dateB.getTime();
const diffDate = diffMsec / (24 * 60 * 60 * 1000);
const diffHour = diffMsec / (60 * 60 * 1000);
const diffMin = diffMsec / (60 * 1000);
console.log(`${diffDate}日の差があります`);
console.log(`${diffHour}時間の差があります`);
console.log(`${diffMin}分の差があります`);
