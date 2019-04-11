// インスタンスを作らずに呼び出せる性的なメソッドを使いたい

// クラス名をインスタンス化することなくメソットを呼びたい時
class MyClass {
  // staticがないとインスタンス化しないと呼べない？
  static method() {
    console.log("staticなメソッド");
  }
}
// let x = new MyClass();
// x.method();
MyClass.method();

class StringUtil {
  static createFullName(firstName, familyName) {
    return `${familyName} ${firstName}`;
  }
}

// 汎用的にメソッドを使いたい時にこれを使う

const myFullName = StringUtil.createFullName("いちお", "すずき");

console.log(myFullName);
