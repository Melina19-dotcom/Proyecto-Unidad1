const preguntas = [
    {
      pregunta: "¿Cómo se llama la protagonista de la serie «El Ada de las Pesas» de Netflix?",
      imagen: "imagen/protagonistas.jpg",
      respuestas: ["Lee Sung Kyung", "Kyung Soo Jin", "Lee Joo Young", "Cho Hye Jung"],
      correcta: 1
    },
    {
      pregunta: "¿Qué serie fue galardonada al mejor elenco de dobles de acción en los Premios del Sindicato de Actores (SAG) el 2022?",
      imagen: "imagen/SAG.jpg",
      respuestas: ["Cobra Kai", "The Falcon and the Winter Soldier", "Loki", "Squid Game"],
      correcta: 3
    },
    {
      pregunta: "¿Quién interpreta a Cha Sung Hoon en propuesta laboral?",
      imagen: "imagen/ChaSung.jpg",
      respuestas: ["Kim Min Kyu", "Gong Yoo", "Lee Jong Suk", "Cha Eun Woo"],
      correcta: 0
    },
    {
      pregunta: "¿En qué serie de TV participa Anya Taylor-Joy",
      imagen: "imagen/AnyaTaylor.jpg",
      respuestas: ["Monstruo: La historia de Jeffrey Dahmer", "Stranger Things", "La reina Carlota: Una historia de Los Bridgerton", "Gambito de Dama"],
      correcta: 3
    }
  
  ];
  
  let indice_aleatorio = 0;
  
  let pregunta_txt = "";
  
  let interval;
  
  window.onload = iniciar();
  
  function iniciar() {
    loadQuestions();
    if (localStorage.getItem("SCORE") != null) {
      localStorage.removeItem("SCORE");
    }
  }
  
  function iniciarCronometro() {
    const contador = 15, cronometroDisplay = document.getElementById("cronometro")
  
    iniciarTiempo(contador, cronometroDisplay)
  
  }
  
  function iniciarTiempo(duracion, componente) {
    interval = setInterval(() => {
      if (duracion === 0) {
        componente.innerHTML = "Se acabó el tiempo";
        clearInterval(interval);
        loadQuestions()
      } else {
        duracion = duracion < 10 ? "0" + duracion : duracion;
        componente.textContent = "00:" + duracion;
        duracion--;
      }
    }, 1000)
  
  }
  
  function loadQuestions() {
    iniciarCronometro();
    if (preguntas.length > 0) {
      indice_aleatorio = Math.floor(Math.random() * preguntas.length);
      pregunta_txt = "";
      pregunta_txt += '<p class="pregunta">' + preguntas[indice_aleatorio].pregunta + '</p>';
  pregunta_txt+='<img src="'+preguntas[indice_aleatorio].imagen +'" width="190px" height=72px">';
      
      pregunta_txt += '<button id="opcion0" class="botonTrivias" onclick="verificarRespuestaCorrecta(0, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[0] + '</button>';
      pregunta_txt += '<button id="opcion1" class="botonTrivias" onclick="verificarRespuestaCorrecta(1, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[1] + '</button>';
      pregunta_txt += '<button id="opcion2" class="botonTrivias" onclick="verificarRespuestaCorrecta(2, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[2] + '</button>';
      pregunta_txt += '<button id="opcion3" class="botonTrivias" onclick="verificarRespuestaCorrecta(3, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[3] + '</button>';
      document.getElementById("pregunta").innerHTML = pregunta_txt;
      preguntas.splice(indice_aleatorio, 1);
    } else {
      window.location.href = "resultados.html";
    }
  }
  
  let puntos = 0;
  
  function verificarRespuestaCorrecta(indice, correcta) {
    if (correcta === indice) {
      puntos = puntos + 5;
    }
    localStorage.setItem("SCORE", puntos);
    document.getElementById("opcion0").disabled = true;
    document.getElementById("opcion1").disabled = true;
    document.getElementById("opcion2").disabled = true;
    document.getElementById("opcion3").disabled = true;
  }
  document.getElementById("siguienteTrivia").addEventListener("click", () => { clearInterval(interval), loadQuestions() });