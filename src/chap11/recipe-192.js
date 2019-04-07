// 192 画像の読み込み完了時に処理を行いたい
// 画像の読み込み中にローディングを表示したい時
// 画像読み込み後、画像データにアクセスする時

// onload

const img = document.querySelector("#myImage");

img.onload = () => {
  // 画像の読み込み完了後の処理
  img.classList.remove("loading");
};

img.src = "images/photo.jpg";

img.classList.add("loading");
