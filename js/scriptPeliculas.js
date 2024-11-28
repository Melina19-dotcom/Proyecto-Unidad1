const preguntas = [
    {
        pregunta: " «Sigo siendo la misma persona de antes, solo que con ropa mejor».",
        respuestas: ["27 bodas", "Yo antes de ti ", "El diablo viste a la moda", "El diario de la princesa"],
        correcta: 2
    },
    {
        pregunta: " «Eres muy lista, eres gentil, eres importante».",
        respuestas: ["Loco y estúpido amor", "Historias cruzadas", "Scary movie", "Bajo la misma estrella"],
        correcta: 1
    },
    {
        pregunta: " «No soy paciente por naturaleza, pero tras cuarenta años esforzándome estoy aprendiendo a no dejar que la ira se lleve lo mejor de mí».",
        respuestas: ["Orgullo y prejuicio", "Antes de ti", "Maria Antonieta", "Mujercitas"],
        correcta: 3
    },
    {
        pregunta: " «Decirle a alguien gorda no te hará mas delgada. Llamar a alguien estúpido no te hará ni un poco más inteligente».",
        respuestas: ["Legalmente rubia", "Un viernes de locos", "Chicas pesadas", "Ni idea"],
        correcta: 2
    },
    {
        pregunta: "«Cuando me necesiten, pero, no me quieran me deberé quedar. Pero, cuando me quieran; pero ya no me necesiten entonces me marcharé».",
        respuestas: ["Matilda", "Nanny McPhee:La nana mágica", "El jardín secreto", "Ella está encantada"],
        correcta: 1
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
    pregunta_txt += '<audio autoplay> <source src="' + preguntas[indice_aleatorio].audio + '" type="audio/mp3"></audio>';
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