var typed = new Typed('.element', {
    strings: ["Web Developer", "App Developer"],
    typeSpeed: 120,
    backSpeed: 60,
    backDelay: 3000,
    loop: true
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.getElementById("enviar").addEventListener("click", comprobar);
let mensaje = "";
var myModal = new bootstrap.Modal(document.getElementById('myModal'));
  let contenidoModal = document.getElementById("contenidoModal");
function comprobar(){

    if(comprobarEmail()&&comprobarNombre()&&comprobarMsg()){
        contenidoModal.innerHTML = `
   <div class="modal-body d-flex justify-content-center">
    <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>`
   
    myModal.show();

    setTimeout(function(){
        contenidoModal.innerHTML = `
        <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
   <div class="modal-body d-flex justify-content-center">
    <h4>Formulario enviado correctamente</h4>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
  </div>`
    },2000)
    }else{
        contenidoModal.innerHTML = `
        <div class="modal-header">
        <h4 class="modal-title">Error!</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
   <div class="modal-body d-flex justify-content-center">
    <h5>${mensaje}</h5>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
  </div>`
   
    myModal.show()
    }
}

function comprobarNombre(){
    let nombre = document.getElementById("nombre").value;
    let regexp = /^([a-z]\s?)*[a-z]$/i;
    if(regexp.test(nombre)){
        return true;
    }else{
        mensaje = "El nombre no es valido"
        return false;
    }
}

function comprobarEmail(){
    let nombre = document.getElementById("email").value;
    let regexp = /^[a-z0-9]+@{1}[a-z0-9]+.{1}[a-z]+$/i;
    if(regexp.test(nombre)){
        return true;
    }else{
        mensaje = "El email no es valido"
        return false;
    }
}

function comprobarMsg(){
    let msg = document.getElementById("msg").value;
    if(msg.length > 0){
        return true;
    }else{
        mensaje = "Debes introducir un mensaje";
        return false;
    }
}

