// 180 jsからcss TransitionsとcssAnimationを使いから

// cssのアニメーションのタイミングに合わせて処理したい時;
const button = document.querySelector("button");
button.addEventListener("click", handleClick);

function handleClick() {
  const element = document.querySelector(".target");
  if (element.classList.contains("state-show") === false) {
    element.classList.add("state-show");
  } else {
    element.classList.remove("state-show");
  }
}
