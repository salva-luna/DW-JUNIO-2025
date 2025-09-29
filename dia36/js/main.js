function menu(id) {
    document.querySelector("li.active").classList.remove("active");
    document.querySelector("main div.active").classList.remove("active");
    document.querySelector("#menu-" + id).classList.add("active");
    document.querySelector("#div-" + id).classList.add("active");
}

//Ejercicio Nivel 2, Tercera seccion//

function jugar() {
  const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
  const numeroGanador = 5; 

  const resultado = document.getElementById("resultado");
  const mensaje = document.getElementById("mensaje");

  // Mostrar el número generado
  resultado.textContent = `Número generado: ${numeroAleatorio}`;

  if (numeroAleatorio === numeroGanador) {
    mensaje.textContent = 'Felicidades! Ganaste';
    mensaje.style.color = "#00ffb7";
  } else {
    mensaje.textContent = 'Perdiste :(';
    mensaje.style.color = "#ff4d6d";
  }
}