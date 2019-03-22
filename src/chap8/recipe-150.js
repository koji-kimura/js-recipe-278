// 要素を他の要素で置き換えた
setTimeout(() => {
  // コンテナ
  const container = document.querySelector(".container");
  // 急ボックス要素
  const oldBox = document.querySelector(".old-box");
  //　新ボックス要素。divを作り、「新ボックス」というテキストノードを追加する
  const newBox = document.createElement("div");
  newBox.textContent = "新ボックス";
  // new-box,boxというcssクラスを追加する
  newBox.classList.add("new-box", "box");
  // 鍼灸ボックス流を入れ替える
  container.replaceChild(newBox, oldBox);
}, 3000);
