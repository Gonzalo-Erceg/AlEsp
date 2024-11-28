const loginRadio = document.querySelector("#login-radio");
const registerRadio = document.querySelector("#register-radio");
const radioContainer = document.querySelector(".radio-container");

const fondo = document.querySelector(".fondo");

const loginForm = document.querySelector("#login");
const registerForm = document.querySelector("#register");
const modal = document.getElementById("error-modal");
const closeModal = document.getElementById("close-modal");
const errorMessage = document.getElementById("error-message");
const errorTitle = document.getElementById("error-title");


const botonLogin = document.getElementById("boton-login");
const botonregister = document.getElementById("boton-register");

function showError(message, title) {
  errorTitle.textContent = title || "Error"; // Título por defecto
  errorMessage.textContent = message || "Algo salió mal. Por favor, inténtalo de nuevo."; // Mensaje por defecto
  modal.style.display = "flex";
}


function hideModal() {
    modal.style.display = "none";
}

// Evento para cerrar el modal al hacer clic en la 'X'
closeModal.addEventListener("click", hideModal);

loginRadio.addEventListener("change", () => {
  radioContainer.classList.remove("registerRadio");
  loginForm.classList.toggle("show");
  registerForm.classList.toggle("show");
});
registerRadio.addEventListener("change", () => {
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
  }).then(res=>res.json()).then(res=>{
    showError("Registro hecho correctamente, ahora inicia sesion","Felicidades")
  })
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  fetch("https://alesp-back.onrender.com/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        localStorage.setItem("session", response.token);
        window.location.href = "/dashboard.html";
      }
    })
    .catch((e) => console.log(e))
});

