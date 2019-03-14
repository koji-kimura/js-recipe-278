// 画面サイズがブレークポイントを超えた時に処理したい
// 画面サイズがブレークポイントを超えた時に処理をしたい時
// スマートフォンの縦持ち横持ちが変わったタイミングで処理したい時

// const mediaQueryList = matchMedia("(men-width: 500px");
// console.log(mediaQueryList);

//matchesプロパティを用いて、ブラウザーウィンドウのサイズがメディアクエリに一致するかどうかを調べる

const rectAngle = document.querySelector(".reactangle");

// メディアクエリ情報
const mediaQueryList = matchMedia("(min-width:600px)");

//　メディアクエリが変更されたタイミングで処理
mediaQueryList.addListener(onMediaQueryChange);

function onMediaQueryChange(mediaQueryList) {
  if (mediaQueryList.match === true) {
    rectAngle.classList.add("big-size");
    console.log("ウィンドウサイズが600pxを超えました");
  } else {
    rectAngle.classList.remove("big-size");
    console.log("ウィンドウサイズが600pxを下回りました");
  }
}

// ページ表示時に一度onMediaQueryChange()を実行しておく
onMediaQueryChange(mediaQueryList);
