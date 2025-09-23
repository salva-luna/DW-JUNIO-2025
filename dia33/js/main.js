//ejercicio 1-1

const primerdiv = document.querySelector('.ejercicio1-1__div');
const primerboton = document.querySelector('.ejercicio1-1__button');

primerboton.addEventListener('click', () => {
    primerdiv.classList.toggle('animado');
})

//ejercicio 1-2

const segundop = document.querySelector('.ejercicio1-2__p');
const segundoboton = document.querySelector('.ejercicio1-2__button');

segundoboton.addEventListener('click', () => {
    segundop.classList.remove('ejercicio1-2__p');

})

//ejercicio 1-3

const tercerdiv = document.querySelector('.ejercicio1-3__div');
const tercerboton = document.querySelector('.ejercicio1-3__button');

tercerboton.addEventListener('click', () => {
    tercerdiv.classList.toggle('tamano');
})

//ejercicio 1-4

const cuartoboton = document.querySelector('.ejercicio1-4__button');
const contenedor = document.querySelector('.contenedor');
let contador = 1;

function colorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

cuartoboton.addEventListener('click', function () {
    let cuartodiv = document.createElement('div');
    cuartodiv.classList.add('cuadrado');
    contenedor.appendChild(cuartodiv);
    cuartodiv.style.backgroundColor = colorAleatorio();
    cuartodiv.style.cursor = "pointer";
    numerar();
    cuartodiv.addEventListener('click', () => {
        cuartodiv.remove();
        numerar();

    });

    
});


function numerar() {
    const cajas = document.querySelectorAll('.cuadrado');
    let contador = 1;
    cajas.forEach((elem) => {
        elem.textContent = contador++;
    })
}

