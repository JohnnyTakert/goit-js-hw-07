let button = document.querySelector(".change-color");
let span = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", function () {
  let color = getRandomHexColor();

  document.body.style.backgroundColor = color;

  span.textContent = color;
});
