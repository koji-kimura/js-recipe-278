// イテレータを自作したい
// ジェネレータ
// オリジナルのイテレータを定義したい時

// イテレータを簡単に取り扱うための方法が「ジェネレータ」

function* myGenerator() {
  yield "鈴木";
  yield "田中";
  yield "後藤";
}

const myIterable = myGenerator();

// next()で値を１つずつ取り出す
console.log(myIterable.next().value);
console.log(myIterable.next().value);
console.log(myIterable.next().value);
console.log(myIterable.next().done);
