// フォーム送信時に処理を行いたい
// フォームの送信前に何らかの処理を加えたい時

// submit　フォームの送信時のイベント

// form要素の参照
const formElement = document.querySelector("form");

// 送信イベントを監視
formElement.addEventListener("submit", handleSubmit);

// 送信イベントは政治
function handleSubmit(event) {
  // confirmでユーザーに確認する
  const isYes = confirm("この内容で送信していいですか？");

  // 「いいえ」を選択した場合
  if (isYes === false) {
    // 挙動のキャンセル
    event.preventDefault();
  }
}
