//オブジェクトを編集不可能にしたい
//freezeあるいはisFrozen
const object1 = { id: 10, name: "田中" };
Object.freeze(object1);
// object1.id = 12;

// object1.address = "東京";

console.log(object1);
console.log(Object.isFrozen(object1));
//sealとかpreventExtensions()なんていうのもあるんだってさ
