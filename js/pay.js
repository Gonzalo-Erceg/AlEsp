const token= localStorage.getItem("session")
const modal = document.getElementById("error-modal");
const closeModal = document.getElementById("close-modal");
const errorMessage = document.getElementById("error-message");
const errorTitle = document.getElementById("error-title");
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
  


document.addEventListener("DOMContentLoaded",()=>{
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    
    const amountFromUrl = getQueryParam('amount');

   
    if (amountFromUrl) {
        const input = document.getElementById('amount');
        input.value = amountFromUrl;  
        input.disabled = true;  
    }
})


document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault()
    
    fetch("https://alesp-back.onrender.com/donation/",{
        method:"POST",
        headers: {
            "authorization": `Bearer ${token}`,
               'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            amount:parseInt(e.target.amount.value)
        })
    }).then(res=>res.json()).then(res=>{showError("Tu donacion ha sido recibida con exito!","Felicidades")})
})