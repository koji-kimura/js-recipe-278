const object1 = {
  result: true,
  members: [
    { id: 1, name: "鈴木" },
    { id: 2, name: "田中" },
    { id: 3, name: "佐藤" }
  ]
};

// こっちの場合はシャローコピーで同じデータを参照する
const conpiledObject1 = Object.assign({}, object1);

console.log(conpiledObject1);

const object2 = {
  result: true,
  members: [
    { id: 1, name: "鈴木" },
    { id: 2, name: "田中" },
    { id: 3, name: "佐藤" }
  ]
};

//オブジェクトのコピー...はオブジェクトの分割代入
const copiedObject2 = { ...object2 };
console.log(copiedObject2);
