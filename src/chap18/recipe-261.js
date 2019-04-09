// クラスを使いたい（インスタンス化）
// クラスをインスタンス化したい時
// 作成したクラスを使用したい時

// new クラス名()

// クラス宣言で定義したクラスを実際のデータとして使うためには、new演算子を用いてnew クラス()とする
// それをインスタンス化とする

class MyClass {
  constructor() {
    this.classField = 12;
  }
  classMethod() {
    console.log("メソッドが実行されました");
  }
}

const myInstance = new MyClass();

console.log(myInstance.classField);
myInstance.classMethod();
