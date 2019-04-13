// MyClass.jsをimport
import { MyClass1 } from "./MyClass1.js";
import { MyClass2 } from "./MyClass2.js";

// MyClassのメソッドより文字列を取得する
const message1 = new MyClass1().myMethod1();
const message2 = new MyClass2().myMethod2();

console.log(message1);
console.log(message2);
