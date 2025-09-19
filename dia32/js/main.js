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