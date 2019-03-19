// 子要素、前後要素、親要素を取得したい
// 特定の要素を取得したいとき

const parentElement = document.querySelector("#parent");

console.log(parentElement.children);

const firstElementChild = parentElement.firstChild;
console.log(firstElementChild);
console.log(firstElementChild.nextElementSbling);
console.log(firstElementChild.parentNode);
