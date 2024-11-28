let donaciones = [];
// carga las donaciones
const token = localStorage.getItem("session");
document.addEventListener("DOMContentLoaded", () => {
  
  fetch("https://alesp-back.onrender.com/donation/", {
    method: "GET",
    headers: {
      "authorization": `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {donaciones = res});
});
document.querySelector("#form").addEventListener("submit",(e)=>{
  e.preventDefault()
  fetch("https://alesp-back.onrender.com/user/",
    {
      method:"PATCH",
      headers: {
        "authorization": `Bearer ${token}`,
           'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        voluntari:true
      })
    },
    
  ).then(res=>res.json()).then(res=>console.log(res))
})



const contentArea = document.getElementById("content-area");

function loadContent(section) {
  switch (section) {
    case "donations":
      contentArea.innerHTML = `<div class="DonationContain"> <div class="socio">
          <h2>Socio</h2>
          <p>
            Hazte socio de Alimentando Esperanzas, aporta mes a mes y ayuda a
            mejorar la vida de las personas
          </p>
          <a href="/socio.html">Hazte socio</a>
        </div>
        <div class="donacion">
          <h2>Donación Unica</h2>
          <p>
            Puedes donar el monto que desees y poner tu grano de arena para
            ayudar a los mas necesitados
          </p>
          <a href="/pay.html">Donación Unica</a>
        </div></div> `;
      break;
    case "my-donations":
      contentArea.innerHTML = ` <div class="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Monto</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              ${donaciones
                .map(
                  (e) => `<tr><th>$${e.amount}</th> <th>${"hoy"}</th> </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>`;
      break;
    case "voluntary":
      contentArea.innerHTML = ` <div class="voluntaryContainer">
          <h1>¿Tenes ganas de ayudar? Sumate a nuestra red de voluntarios</h1>
          <form id="form">
            <input placeholder="Nombre" name="name" />

            <input placeholder="Apellido" name="lastname" />

            <input placeholder="Fecha de nacimiento" type="date" />

            <input placeholder="DNI" />

            <input placeholder="Teléfono" />

            <textarea placeholder="Cuéntanos que podes aportar"></textarea>
            <button class="submitButton">Postularse</button>
          </form>
        </div>`;
        document.querySelector("#form").addEventListener("submit",(e)=>{
          e.preventDefault()
          fetch("https://alesp-back.onrender.com/user/",
            {
              method:"PATCH",
              headers: {
                "authorization": `Bearer ${token}`,
              },
              body:JSON.stringify({
                voluntari:true
              })
            },
            
          ).then(res=>res.json()).then(res=>console.log(res))
        })
        
      break;
    default:
      break;
  }
}
