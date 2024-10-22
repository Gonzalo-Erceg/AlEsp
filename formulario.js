//cuando el contenido este cargado completamente
document.addEventListener("DOMContentLoaded", function(){


    //para que el usuario llene los datos
    const email = {
        empresa: "",
        telefono: "",
        email: "",
        mensaje: ""
    }

    //Seleccionando los elementos del formulario
    const inputEmpresa = document.querySelector("#empresa");
    const inputTelefono = document.querySelector("#telefono");
    const inputEmail = document.querySelector("#email");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');

    //Agregando eventos para los distintos inputs
    // blur aparece cuando se hace click fuera de un campo
    inputEmpresa.addEventListener("input", validar);
    inputTelefono.addEventListener("input", validar);
    inputEmail.addEventListener("input", validar);
    inputMensaje.addEventListener("input", validar);

    btnSubmit.addEventListener("click", function(e){
        e.preventDefault();
    });

    btnReset.addEventListener("click", function(e){
        e.preventDefault();

        //reiniciar el objeto
        email.email = "";
        email.empresa = "";
        email.telefono = "";
        email.mensaje = "";
        formulario.reset();
        comprobarEmail();
    })

    //al escribir info en los campos se lanza esta funcion
    function validar(e) {
        if(e.target.value.trim() === ""){
            //Se muestra el alerta debajo del campo seleccionando el padre del mismo
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            // se reinicia el objeto
            email[e.target.id] = "";
            comprobarEmail();
            return;
        }

        if(e.target.id === "email" && !validarEmail(e.target.value)){
            mostrarAlerta("El Email NO es valido", e.target.parentElement);
            //se reinicia el objeto
            email[e.target.id] = "";
            comprobarEmail();
            return;
        }
        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.id] = e.target.value.trim().toLowerCase();
        // Comprobar el objeto email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        //Verificar que no se multipliquen las alertas en cada input
        const alerta = referencia.querySelector(".fondoAlerta");

        //si alerta ya existe se quitan las repetidas
        limpiarAlerta(referencia)



        //Genero un msj de alerta en html, en un parrafo.
        const error = document.createElement("P");
        error.textContent = mensaje;
        //Agrego clase para modificar el color del alerta
        error.classList.add("fondoAlerta");

        //Agregar alerta visual al formulario
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector(".fondoAlerta");
        if(alerta) {
            alerta.remove();
        }

    }

    //Validar que el mail este escrito con el formato correcto
    function validarEmail(email) {
        //Expresion Regular para validar Emails
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        //Devuelve true o false si se cumple o no el formato de email
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        //Verifica que todos los campos esten llenos y activa/desactiva el boton de enviar
        if(Object.values(email).includes("")){
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.disabled = false;

    }
});