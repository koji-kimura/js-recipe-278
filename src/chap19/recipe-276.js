// prototypeとはオブジェクトにメンバ（メンバー変数、メンバー関数）を追加するためのプロパティ
// Array,Date,FunctionはすべてObjectを継承したオブジェクト（ビルドインオブジェクト）なので全オブジェクトにてprototypeが存在する
console.dir(String.prototype);
console.dir(Array.prototype);
console.dir(Date.prototype);

Array.prototype.myMethod = function() {
  console.log("こんにちは");
};

Array.prototype.filter = function() {
  console.log("既存のfilterを無視したメソッド");
};

//Symbolによってユニーク性が担保される
const shuffle = Symbol();
// Array.prototypeの「shuffle」メンバーに関数を追加する
Array.prototype[shuffle] = function() {};

const array = [1, 2, 3];

// 自前のshuffle()メソッド
array[shuffle]();
// 将来追加されたshuffle()メソッド
array.shuffle();

// const array2 = [1, 2, 3];

// array2.myMethod();

// // 「shuffle」という名前のSymbol
// const shuffle = Symbol();
// // 配列のシャッフル関数を追加
// Array.prototype[shuffle] = function() {
//   // シャッフル処理
//   const arrayLength = this.length;
//   for (let i = arrayLength - 1; i >= 0; i--) {
//     const randomIndex = Math.floor(Math.random() * (i + 1));
//     [this[i], this[randomIndex]] = [this[randomIndex], this[i]];
//   }

//   //自分を返す
//   return this;
// };

// // シャッフルテスト
// // 配列の各数値を偶数抜き出し、シャッフルして100倍にする
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const x = array
//   .filter(value => value % 2 === 0)
//   [shuffle]()
//   .map(value => value * 100);

// // console.log(x);

// // // 配列やオブジェクトに独自メソッドを追加したい
// // // 配列にシャッフル関数を追加したい時
// // // オブジェクトにJSON変換メソッドを追加したい時

// // // オブジェクト.srototype[シンボル] = function(){} オブジェクトに独自のメソッドを追加する
// // //　オブジェクト[シンボル]()  独自メソッドを実行する

// // // 「myMethod」という名前のSymbol()生成
// // const myMethod = Symbol();

// // // 独自メソッドの追加
// // Array.prototype[myMethod] = function() {
// //   console.log("独自メソッドです");
// // };

// // // 独自メソッドの実行
// // const array = [1, 2, 3];
// // array[myMethod]();
