//日付文字列からタイムスタンプ値を取得したい
// 日付や時刻の差分を計算するためにタイムスタンプ値を取得したい時

const num1 = Date.parse("2018/06/20");
console.log(num1);

const num2 = Date.parse(2018, 5, 20);
console.log(num2);

const num = Date.now();
console.log(num);
