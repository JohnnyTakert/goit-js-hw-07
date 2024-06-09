let input = document.querySelector("#controls input");
let createButton = document.querySelector("#controls button[data-create]");
let destroyButton = document.querySelector("#controls button[data-destroy]");
let boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let elements = [];

  for (let i = 0; i < amount; i++) {
    let element = document.createElement("div");
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  }

  return elements;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", function () {
  let amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    alert("The number must be between 1 and 100");
    return;
  }

  destroyBoxes();

  let boxes = createBoxes(amount);
  boxes.forEach((box) => boxesContainer.appendChild(box));

  input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);
