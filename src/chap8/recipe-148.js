// 要素を生成したい
// html要素を動的に生成したい時
// モーダルウィンドウを生成したい時

// create-modal-buttonをクリックした時の処理
document
  .querySelector("#create-modal-button")
  .addEventListener("click", displayModalWindow);

/** モーダルウィンドウを表示する **/
function displayModalWindow() {
  // モーダルウィンドウを生成する
  const modalElement = document.createElement("div");
  // modalクラスを付与する
  modalElement.classList.add("modal");

  // モーダルウィンドウの内部要素を生成する
  const innerElement = document.createElement("div");
  innerElement.classList.add("inner");
  innerElement.innerHTML = `
    <p>モーダルウィンドウの中身です</p>
    <div class="character"></div>
  `;

  // モーダルウィンドウに内部要素を配置する
  modalElement.appendChild(innerElement);

  // body要素にモーダルウィンドウを配置する
  document.body.appendChild(modalElement);

  // 内部要素をクリックしたらモーダルウィンドウを削除する処理
  innerElement.addEventListener("click", () => {
    closeModalWindow(modalElement);
  });
}

/** モーダルウィンドウを閉じる **/
function closeModalWindow(modalElement) {
  document.body.removeChild(modalElement);
}
