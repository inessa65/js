const box = document.getElementById("box");
const btn = document.getElementById("container");
btn.addEventListener("click", function (e) {
  if (e.target.hasAttribute("data-file")) {
    const file = e.target.getAttribute("data-file");
    loadFile(`${file}`);
  }
});
function loadFile(fileName) {
  box.innerText = "loading..";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", fileName, true);
  xhr.onload = function () {
    // let str=this.responseText; //console.log(str);
    loaded(xhr.responseText);
  };
  xhr.send(null);
}
function loaded(text) {
  const box = document.getElementById("box"); // console.log(text);

  box.innerHTML = text;
}
