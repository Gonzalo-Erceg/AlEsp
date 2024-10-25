const loginRadio = document.querySelector("#login-radio");
const registerRadio = document.querySelector("#register-radio");
const radioContainer = document.querySelector(".radio-container");

const fondo = document.querySelector(".fondo");

const loginForm = document.querySelector("#login");
const registerForm = document.querySelector("#register");

loginRadio.addEventListener("change", () => {
  fondo.classList.remove("register");
  radioContainer.classList.remove("registerRadio");
  loginForm.classList.toggle("show");
  registerForm.classList.toggle("show");
});
registerRadio.addEventListener("change", () => {
  fondo.classList.add("register");
  radioContainer.classList.add("registerRadio");
  loginForm.classList.toggle("show");
  registerForm.classList.toggle("show");
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const repassword = event.target.repassword.value;

  fetch("https://alesp-back.onrender.com/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: name,
      email: email,
      password: password,
    }),
  });
});
