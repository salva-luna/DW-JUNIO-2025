//Ejercicio 1 - 1
const primerParrafo = document.querySelector('#primer-parrafo');
primerParrafo.innerHTML = 'Hola <br> mundo';

//Ejercicio 1 - 2
const segundoParrafo = document.querySelector('#segundo-parrafo');
segundoParrafo.style.color = 'blue';
segundoParrafo.style.fontSize = '30px';

//Ejercicio 1 - 3
const tercerParrafo = document.querySelector('#tercer-parrafo');
const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');

boton1.addEventListener('click', () => {
    tercerParrafo.style.color = 'red';
    tercerParrafo.style.fontSize = '30px';
});

boton2.addEventListener('click', () => {
    tercerParrafo.style.color = 'green';
    tercerParrafo.style.fontSize = '15px';
});

//Ejercicio 2 - 1
const PI = 3.14;
let radio = 5;

function areaCirculo(r) {
    return PI * r * r;
}

console.log('El área del círculo es: ' + areaCirculo(radio));

//Ejercicio 3 - 1
const button3 = document.querySelector('#button3');
boton3.addEventListener('click', () => {
    alert('Haz clickado en el botón');
});


