// クラスで変数を使いたい
// クラスに変数を保持したい時
// APIの通信結果を保持するクラスを作りたい時

// this変数名 = 値 メンバー変数を定義する

// =はいらない
class MyClass {
  constructor() {
    // 代入をしない場合はundefinedになる
    this.myField = 100;
    this.myField2 = "鈴木";
  }
}

// インスタンス化
const myInstance = new MyClass();
// console.log(myInstance.myField);
// console.log(myInstance.myField2);

// 日司空を受けとる

// コンストラクタで引数をとる
class Myclass2 {
  constructor(myField1, myField2) {
    this.myField1 = myField1;
    this.myField2 = myField2;
  }
}

const myInstance2 = new Myclass2("鈴木", "田中");
// console.log(myInstance2.myField1);
// console.log(myInstance2.myField2);

class Myclass3 {
  constructor(myField1, myField2 = "りんご") {
    this.myField1 = myField1;
    this.myField2 = myField2;
  }
}
const myInstance3 = new Myclass3("鈴木");
console.log(myInstance3.myField2);

// API通信結果のJSONデータを格納するクラスを作成する
class ApiResultData {
  constructor() {
    this.result;
    this.errorMessange;
    this.userName;
    this.age;
  }
}

//　レスポウンスデータのパース(ApiResultData)を想定した関数
function parseData() {}
