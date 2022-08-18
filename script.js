const btn = document.querySelector("#btn");
const showColor = document.querySelector("#color-text-show");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
});

function Show() {
  showColor.innerHTML = `Color: rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}) `;
}
