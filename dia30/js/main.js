//ejemplo 1-1
// let win;

// document.getElementById("abrir").onclick = () => {
//     win = window.open("", "", "width=400,height=400");
// }

// document.getElementById("cerrar").onclick = () => {
//     win.close();
// }

// document.getElementById("mover").onclick = () => {
//     win.moveTo(200, 200);
// }

// document.getElementById("redimensionar").onclick = () => {
//     win.resizeTo(600, 600);
// }

// document.getElementById("abrirGoogle").onclick = () => {
//     win.location.href = "http://google.es";
// }

//ejemplo 2-1

// document.getElementById("botonCambiar").addEventListener("click", () => {
//     const cajas = document.querySelectorAll(".caja");
//     cajas.forEach(caja => {
//        const numeroAleatorio = Math.floor(Math.random() * 100);
//        caja.innerText = numeroAleatorio;
//     });
// })


//ejemplo 3-1

// Declarar constantes
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

let escribiendoEnPrimero = true;
let operadorSeleccionado = null;

// Escribir números en el input seleccionado
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        if (escribiendoEnPrimero) {
            input1.value += boton.textContent;
        } else {
            input2.value += boton.textContent;
        }
    });
});

// Cambiar de input al hacer clic en ellos
input1.addEventListener('click', () => escribiendoEnPrimero = true);
input2.addEventListener('click', () => escribiendoEnPrimero = false);

// Seleccionar operador
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        operadorSeleccionado = boton.textContent;
        // Resaltar el botón seleccionado
        botonesOperadores.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
    });
});

// Calcular resultado
calcular.addEventListener('click', () => {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    let res;

    if (!operadorSeleccionado) {
        resultado.textContent = 'Selecciona un operador';
        return;
    }

    if (operadorSeleccionado === '+') res = num1 + num2;
    else if (operadorSeleccionado === '-') res = num1 - num2;
    else if (operadorSeleccionado === '*') res = num1 * num2;
    else if (operadorSeleccionado === '/') res = num2 !== 0 ? num1 / num2 : 'No se puede dividir entre 0';

    resultado.textContent = 'Resultado: ' + res;
});
