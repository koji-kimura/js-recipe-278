// ハッシュの変更を検知したい
// ハッシュの値を変更したい時

window.addEventListener("hashchage", handleHashChange);
handleHashChange();

function handleHashChange() {
  // 変更後のハッシュの値
  const hash = location.hash;
  document.querySelector(".log").innerHTML = `現在のアンカーは${hash}です`;
}
