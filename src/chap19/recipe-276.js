// 配列やオブジェクトに独自メソッドを追加したい
// 配列にシャッフル関数を追加したい時
// オブジェクトにJSON変換メソッドを追加したい時

// オブジェクト.srototype[シンボル] = function(){} オブジェクトに独自のメソッドを追加する
//　オブジェクト[シンボル]()  独自メソッドを実行する

// 「myMethod」という名前のSymbol()生成
const myMethod = Symbol();

// 独自メソッドの追加
Array.prototype[myMethod] = function() {
  console.log("独自メソッドです");
};

// 独自メソッドの実行
const array = [1, 2, 3];
array[myMethod]();
