// 関数内で扱う定数や変数の影響範囲（スコープ）について知りたい
// 処理をひとかたまりごとに分割したい時
// 変数・定数の有効範囲を狭めたい時
// {}

{
  const a = 20;
  // 20が出力
  console.log(a);
  {
    console.log(a);
  }
}

// 全てのスコープの外にはグローバルスコープとなりすべてのブロックで使用可能

// ブロックはあらゆる場所で利用可能

function myFunction() {
  const myValue = "鈴木";
  console.log(myValue);
  function myChildFunction() {
    console.log(myValue);
  }
}
myFunction();
// console.log(myValue);

//　ブロックレベルのスコープに対応できないvae宣言
// varはスコープの範囲がわかりにくいので使わない方がよさそう
