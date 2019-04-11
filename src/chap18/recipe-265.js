// クラスを継承したい

//　あるクラスの機能を拡張したクラスを作りたい時
// ビルトインオブジェクトを継承したい時

class MyParent {
  parentMethod() {
    console.log("myparentクラスのメソッド");
  }
}

// myParentを継承したクラス
class MyChild extends MyParent {
  constructor() {
    super();
  }

  childMethod() {
    console.log("MyChildクラスのメソッド");
  }
}

const myChild = new MyChild();
myChild.parentMethod();
myChild.childMethod();
