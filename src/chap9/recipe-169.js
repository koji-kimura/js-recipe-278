// ローカルファイルのファイルをDataURLデータとして読み込みたい

// DataURLをデータ送信用に取得したい時

// readAsDateURL

const element = document.querySelector("#myFile");
const imgEl = document.querySelector(".log img");

// ファイル選択ダイアログが選択されたら
element.addEventListener("input", event => {
  const target = event.target;
  // 選択されたファイルを参照
  const files = target.files;
  // 配列になっているので0番目のファイルを参照
  const file = files[0];

  // FileReaderのインスタンスを作成
  const reader = new FileReader();

  // 読み終わったら
  reader.addEventListener("load", () => {
    // 画像を表示
    imgEl.src = reader.result;
  });
  // テキストファイルとして読み込む
  reader.readAsDataURL(file);
});
