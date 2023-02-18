let nombre = document.getElementById('nombre').value;
let email = document.getElementById('correo').value;
let c1 = document.getElementById('clave').value;
let c2 = document.getElementById('claveConfirmacion').value;
let Enviar = document.getElementById('botonEnviar');

function validacion () {

  if (nombre == "") {
    alert("Rellene este campo");
    usuario.focus();
    return false;
  }
    
  if (email == "") {
    alert("Rellene este campo");
    coreo.focus();
    return false;
  }

  
  if (c1 == "") {
    alert("Rellene este campo");
    clave.focus();
    return false;
  }
  
  if (c2 == "") {
    alert("Rellene este campo");
    claveConfirmacion.focus();
    return false;}
}


function validarClaves(){

    if (c1 != c2){
        alert("Las claves deben coincidir");
        return false;
    }
}

document.f1.submit()
botonEnviar.onclick(validacion);
