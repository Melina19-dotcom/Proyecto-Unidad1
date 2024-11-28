//Para obtener el nombre
var nombre = document.getElementById("nombre").value;
//Para guardar nombre despues de clickear.
document.getElementById("button").addEventListener("click", guardarNombre);

function guardarNombre(){
    let nombreUsuario = document.getElementById("nombre").value;
    localStorage.setItem("name", nombreUsuario);
}