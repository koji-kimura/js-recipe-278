const container = document.querySelector(".container");
const newBox = `<div class="new-box box">new-box要素</div>`;

// 挿入する.new-box要素
setTimeout(() => {
  // .container要素内の先頭にnew-box要素を追加する
  container.insertAdjacentHTML("afterbegin", newBox);
  // .container要素の直後にnew-bos要素を追加する
  container.insertAdjacentHTML("afterend", newBox);
}, 3000);
