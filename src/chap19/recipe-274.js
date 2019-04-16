// ジェネレータの定義

function* range(start, end) {
  let result = start;
  while (result <= end) {
    yield result;
    result++;
  }
}
// 使用例
// ジェネレータの利用例として指定の範囲の整数を人ずつ返すイテレータの作例
//while()内のyieldが実行されるたびに関数が一時停止してnext()が
for (let value of range(2, 6)) {
  console.log(value);
}

// function* myGenerator() {
//   console.log("こんにちは");
//   yield 1000;
//   console.log("今日はいい天気ですね");
//   yield 2000;
//   console.log("明日は晴れるでしょう");
//   yield 3000;
// }

// const myIterable = myGenerator();

// setInterval(() => {
//   console.log(myIterable.next().value);
// }, 1000);

// // // イテレータを自作したい
// // // ジェネレータ
// // // オリジナルのイテレータを定義したい時

// // // イテレータを簡単に取り扱うための方法が「ジェネレータ」

// // function* myGenerator() {
// //   yield "鈴木";
// //   yield "田中";
// //   yield "後藤";
// // }

// // const myIterable = myGenerator();

// // // // next()で値を１つずつ取り出す
// // // console.log(myIterable.next().value);
// // // console.log(myIterable.next().value);
// // // console.log(myIterable.next().value);
// // // console.log(myIterable.next().done);

// // for (let value of myIterable) {
// //   console.log(value);
// // }
