let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

input.addEventListener("input", function () {
  let name = this.value.trim();

  if (name === "") {
    name = "Anonymous";
  }

  output.textContent = name;
});
