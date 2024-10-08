const loginRadio = document.querySelector("#login-radio");
const registerRadio = document.querySelector("#register-radio");
const radioContainer = document.querySelector(".radio-container");
const loginForm = document.querySelector("#login");
const registerForm = document.querySelector("#register");
const fondo = document.querySelector(".fondo");
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
