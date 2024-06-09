let form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = this.elements.email.value.trim();
  let password = this.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  let data = {
    email: email,
    password: password,
  };

  console.log(data);

  this.reset();
});
