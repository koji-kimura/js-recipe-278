setTimeout(() => {
  // 旧ボックス要素
  const oldBox = document.querySelector(".old-box");
  const newBox = document.createElement("div");

  newBox.textContent = "新ボックス";
  // newBox,boxというcssクラスを追加する
  newBox.classList.add("new-box", "box");
  oldBox.replaceWith(newBox);
}, 3000);
