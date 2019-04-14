// 273 反復処理のためのイテレータを使いたい
// 反復処理可能なオブジェクトを扱いたい時

const array = ["鈴木", "高橋", "田中"];

// 配列の個別のイテレータにアクセスするには配列「配列[Symbol.iterator]()」とする
const iterator = array[Symbol.iterator]();
const next1 = iterator.next();
console.log(next1.value);
console.log(next1.done);

const next2 = iterator.next();
console.log(next2.value);
console.log(next2.done);

const next3 = iterator.next();
console.log(next3.value);
console.log(next3.done);

const next4 = iterator.next();
console.log(next4.value);
console.log(next4.done);
