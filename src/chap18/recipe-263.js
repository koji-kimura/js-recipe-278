// クラスでメソッドを使いたい

// クラスにメソッドを定義したい時

class MyClass {
  constructor() {
    this.myFiled = "鈴木";
  }
  myMethod() {
    return "Hello Word";
  }
  myMethod2() {
    return 100;
  }
  myMethod3() {
    return this.myFiled;
  }
}

const myclass = new MyClass();
console.log(myclass.myMethod());
console.log(myclass.myMethod2());
console.log(myclass.myMethod3());
