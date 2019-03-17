// セレクタ名に一致する要素を１つ取得したい
// セレクタ名から要素を取得したい時

// html要素を操作するためにはまず操作対象のhtml要素を取得する必要がある

const logElement = document.querySelector("#log");
logElement.innerHTML = "こんにちは";

console.log(logElement);
