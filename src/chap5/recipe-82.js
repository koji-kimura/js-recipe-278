//西暦を取得したい
const date = new Date();
const year = date.getFullYear();

document.querySelector("#app").innerHTML = `今年は西暦${year}年です`;
