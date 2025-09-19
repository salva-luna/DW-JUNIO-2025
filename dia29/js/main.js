// //Ejercicio 1-1

// function pares () {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// pares();

// //Ejercicio 1-2

// function cuadrado () {
//     for (let i = 1; i <= 5; i++) {
//         let text= "";
//         for (let j = 1; j <= 5; j++) {
//             if (i == 1 || i == 5 || j == 1 || j == 5) {
//                 text += "##";
//             } else {
//                 text += "  ";
//             }
//         }
//         console.log(text);
//     }
// }
// cuadrado();

// //Ejercicio 1-3

// function triangulo () {
//     for (let i = 1; i <= 5; i++) {
//         let text= "";
//         for (let j = 1; j <= i; j++) {
//             text += "#";
//         }
//         console.log(text);
//     }
// }
// triangulo();

// Ejercicio 2-1

// function pares () {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// pares();

// // Ejercicio 2-2

// function saludar (nombre) {
//     alert(`Hola, ${nombre}`);
// }

// function despedir (nombre) {
//     alert(`Adiós, ${nombre}`);
// }

// function procesarEntradaUsuario (callback) {
//     let nombre = prompt("Introduce tu nombre");
//     callback(nombre);
// }

// procesarEntradaUsuario (despedir);

// // Ejercicio 3-1

// setTimeout(() => {
//     console.log("Han pasado 3 segundos");
// }, 3000)

// // // Ejercicio 3-2
// setInterval(() => {
//     const now = new Date;
//     console.log(now.toISOString());
// }, 1000)

// // Ejercicio 3-3

const contador = document.getElementById("contador")
let i = 0;
let intervalo;

intervalo = setInterval(() => {
    i++
    contador.innerText = i;
    if(i === 5) {
        clearInterval(intervalo)
    }
}, 1000)