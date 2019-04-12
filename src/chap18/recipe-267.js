// thisが参照するものを固定したい（アロー関数）
// クラスのメンバー変数をメソッド内やイベントリスナーないで参照したい時
// ()=>{} アロー関数を定義する

class LikeCounter {
  constructor() {
    // ボタンをクリックした数
    this.clickedCount = 0;

    const button = document.querySelector(".button");
    const clickedCountText = document.querySelector(".clickedConstText");
    // コールバック関数のthisは特殊
    // button.addEventListener("click", function() {
    //   this.clickedCount += 1;
    //   clickedCountText.textContent = this.clickedCount;
    // });
    button.addEventListener("click", () => {
      this.clickedCount += 1;
      clickedCountText.textContent = this.clickedCount;
    });
  }
}

new LikeCounter();
