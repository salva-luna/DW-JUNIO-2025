//ejercicio 1-1

const parr = document.getElementById('primer-parrafo');
const boton = document.getElementById('primer-boton');

parr.style.transition = 'background-color 0.4s ease, color 0.4s ease';

boton.addEventListener('click', () => {
    if (parr.style.color != 'white') {
        parr.style.background = 'black';
        parr.style.color = 'white'
    } else {
        parr.style.background = 'white';
        parr.style.color = 'black';
    }
})

//ejercicio 1-2

const segdiv = document.querySelector('.segundo-div');
const segbot = document.querySelector('.segundo-boton');

segdiv.style.transition = 'width 0.8s ease';


segbot.addEventListener('click', () => {
    if (segdiv.style.width === '80vw') {
        segdiv.style.width = '20vw';
    } else {
        segdiv.style.width = '80vw';
    }
});

//ejercicio 2-1

const terdiv = document.querySelector('.tercer-div');
const terbot = document.querySelector('.tercer-boton');


terbot.addEventListener('click', () => {
    if (terdiv.style.transform === 'rotate(0deg) scale(1)') {
        terdiv.style.transform = 'rotate(180deg) scale(0.5)';
    } else {
        terdiv.style.transform = 'rotate(0deg) scale(1)';
    }
});

//ejercicio 2-2

const cuartodiv = document.querySelector('.cuarto-div');
const cuartoboton = document.querySelector('.cuarto-boton');


cuartoboton.addEventListener('click', () => {
    if (cuartodiv.style.display === 'none') {
        cuartodiv.style.display = 'block';
    } else {
        cuartodiv.style.display = 'none';
    }
});

//ejercicio 2-3

const quintospan = document.querySelector('.quinto-span');
const quintoboton = document.querySelector('.quinto-boton');


quintoboton.addEventListener('click', () => {
    if (quintospan.style.opacity === '0') {
        quintospan.style.opacity = '0.5';
    } else {
        quintospan.style.opacity = '0';
    }
});

//ejercicio 3-1

const tabla = document.querySelector('.tabla');
const celdas = document.querySelectorAll('td');
const sextoboton = document.querySelector('.sexto-boton');

function randomColorHex() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const h = n => n.toString(16).padStart(2, '0');
    return '#' + h(r) + h(g) + h(b);
}

sextoboton.addEventListener('click', () => {
    celdas.forEach(celda => {
        celda.style.backgroundColor = '';
    });

    const todas = Math.floor(Math.random() * celdas.length);
    const celda = celdas[todas];

    celda.style.backgroundColor = randomColorHex();
});


//ejercicio 3-3

document.addEventListener("DOMContentLoaded", () => {
    const caja = document.getElementById("miDiv");
    const moverBtn = document.getElementById("moverBtn");
    const centrarBtn = document.getElementById("centrarBtn");

    // Posición aleatoria dentro de la ventana
    function moverAleatorio() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const cajaWidth = caja.offsetWidth;
        const cajaHeight = caja.offsetHeight;

        // Posiciones aleatorias sin que se salga de la pantalla
        const maxX = viewportWidth - cajaWidth;
        const maxY = viewportHeight - cajaHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Aplicar las nuevas posiciones
        caja.style.left = randomX + "px";
        caja.style.top = randomY + "px";
        caja.style.transform = "translate(0, 0)";
    }

    // centrar la caja 
    function centrarCaja() {
        caja.style.left = "50%";
        caja.style.top = "50%";
        caja.style.transform = "translate(-50%, -50%)";
    }

    // Eventos
    moverBtn.addEventListener("click", moverAleatorio);
    centrarBtn.addEventListener("click", centrarCaja);
});