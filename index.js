const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
// console.log(inputEl.checked);

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) bodyEl.style.backgroundColor = "black";
  else bodyEl.style.backgroundColor = "white";
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalstorage();
});

function updateLocalstorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
