// 270 モジュールをエクスポートしたい
// 定数、関数などをモジュールとしてエクスポートしたい時

// 定数myComponentをエクスポート
export const myConstant = 2;

// オブジェクトmyObjectをエクスポート
export const myObject = { name: "鈴木", age: 18 };

// 関数myFunctionをエクスポート
export function myFunction() {
  console.log("myTask");
}

// クラスをエクスポート
export class MyClass {
  constructor() {}
}
