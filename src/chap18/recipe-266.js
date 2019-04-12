// クラスで値を設定、取得するためのstter、getterを使いたい
// クラスのフィールドのような振る舞いをする関数を使いたい時

class MyClass {
  // 「customField」のsetter
  set customField(value) {
    this._customField = value;
  }
  // 「customField」のgetter
  get customField() {
    return this._customField;
  }
  constructor(value) {
    this._customField = value;
  }
}

const myInstance = new MyClass();

// 値のセット(set customField(値){}の部分が実行されている)
myInstance.customField = 20;

// 値の取得(get customField(){}部分が実行されている)
console.log(myInstance.customField);
