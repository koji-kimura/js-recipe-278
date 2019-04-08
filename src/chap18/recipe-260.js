// クラスを定義したい
// ある機能をッヒトまとめにしたクラスを作成した時
// オブジェクト指向プログラミングをjsで実装したい時

// class クラス名{} クラスを宣言する

// class MyClass {
//   //コンストラクタは1つしか定義されない
//   constructor() {
//     console.log("クラスが初期化された");
//   }
// }

class MyClass {
  constructor(value1, value2) {
    console.log(`${value1}`);
    console.log(`${value2}`);
  }
}

new MyClass("田中", 24);

// クラスにはそのクラスに属する変数や関数を持つことが可能、
// クラウスに属するという意味でクラスの「メンバー」と呼ばれている
class MyClass2 {
  constructor() {
    // メンバー変数
    this.myField = "鈴木";
  }
  // メンバー関数
  myMethod() {
    console.log(this.myField);
  }
}
let x = new MyClass2();

x.myMethod();
