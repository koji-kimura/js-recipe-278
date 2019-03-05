const btn = document.querySelector("#btn");

btn.addEventListener("click", event => {
  myReqeustFullScreen(document.body);
});

function myReqeustFullScreen(element) {
  if (element.myReqeustFullScreen) {
    element.myReqeustFullScreen();
  } else if (element.myReqeustFullScreen) {
    element.webkitReqeustFullScreen;
  }
}
