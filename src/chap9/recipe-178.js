const PREF_LIST = [
  { value: 1, name: "北海道" },
  { value: 2, name: "青森県" },
  { value: 3, name: "岩手県" }
];

// select要素を参照
const selectElement = document.querySelector("#pref");

// option要素の初期表示を作成
let optionString = "<option>選択ください</option>";
// option要素を配列から作成
PREF_LIST.forEach(item => {
  // 都道府県ごとにvalueとnameを反映
  optionString += `<option "${item.value}">${item.name}</option>`;
});

//option要素をslect要素内に追加
selectElement.innerHTML = optionString;

// 変更時のイベント
selectElement.addEventListener("change", event => {
  //　現在の値を取得
  const value = event.target.value;

  // メッセージを作成
  const message =
    value === "" ? "選択されていません" : `選択されているのは${value}です`;
  // 画面に表示
  document.querySelector(".log").innerHTML = message;
});
