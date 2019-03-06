// オンライン、オフラインに応じて処理を分けたい
// オフラインの時に画面上にネットワーク通信ができないことを示す

const isOnline = navigator.onLine;

if (isOnline === true) {
  console.log("オンラインです");
} else {
  console.log("オフラインです");
}
