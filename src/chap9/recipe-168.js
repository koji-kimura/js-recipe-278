import { read } from "fs";

// ローカルファイルのファイルをテキストとして読み込みたい

// ユーザーが選択したローカルファイルをテキスト情報として取得したい時

const element = document.querySelector("#myFile");
const pEl = document.querySelector(".log");

// ファイル選択ダイアログが選択されたら
element.addEventListener("input", event => {
  const target = event.target;
  // 選択されたファイルを参照
  const files = target.files;
  // 配列になっているので、0番目のファイルを参照
  const file = files[0];

  // fileReaderのインスタンスを作成
  // ウェブアプリケーションから非同期的に読み込むことが出来る
  const reader = new FileReader();
  // 読み終わったら
  reader.addEventListener("load", () => {
    // 結果をp要素に出力する
    pEl.textContent = reader.result;
  });
  // テキストファイルとして読み込む
  reader.readAsText(file);
});
