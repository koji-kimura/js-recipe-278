// html要素やbody要素を取得したい

const scriptElement = document.createElement("script");
scriptElement.src = "script/new-script.js";

document.head.appendChild(scriptElement);
