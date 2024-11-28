function escribirNombre(){ //JV pone algo dentro de HTML
    document.getElementById("saludo").innerHTML += localStorage.getItem("name");
  }
  
  escribirNombre()