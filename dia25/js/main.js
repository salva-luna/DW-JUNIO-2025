//ejercicio 1 - 1
let alumno = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 20,
    curso: "Web",
}

console.log(alumno.nombre,);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.curso);

//ejercicio 1 - 2
const { nombre, apellido, edad, curso } = alumno;
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(curso);

//ejercicio 1 - 3
alumno.print = function() {
    console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Curso: ${this.curso}`);
}

alumno.print();

//ejercicio 2 - 1

const alumno2 = {...alumno};
console.log(alumno2);

//ejercicio 2 - 2

const array1=[1, 2, 3];
const array2=[4, 5, 6];
const array3=[...array1, ...array2];
console.log(array3);

//ejercicio 2 - 3

function suma(...numeros) {
    return numeros.reduce((acc, curr) => acc + curr, 0);
}

console.log(suma(1, 2, 3, 4, 5)); 

//ejercicio 2 - 4

const { nombre: nomberAlumno, ...restoDatos } = alumno;
console.log(nomberAlumno); //Juan
console.log(restoDatos); //{ apellido: 'Pérez', edad: 20, curso: 'Web', print: [Function (anonymous)] }

const [primero, ...restoArray] = array3;
console.log(primero); //1
console.log(restoArray); //[2, 3, 4, 5, 6]

//ejercicio 3 - 1
const parrafo = document.createElement('parrafo');
parrafo.textContent = "Nombre: ${alumno.nombre}, Edad: ${alumno.edad}";

//ejercicio 3 - 2
const lista = document.createElement('lista');
const li = '<li>Uno</li><li>otros</li>';
lista.innerHTML = li;

//ejercicio 3 - 3
parrafo.addEventListener('click', () => {
    parrafo.style.color = 'red';
});

//ejercicio 3 - 4
const boton = document.createElement('boton');
boton.addEventListener('click', () => {
    lista.innerHTML = '';
});

//ejercicio 3 - 5
const contador = document.createElement('contador');
const boton2 = document.createElement('boton2');
let count = 0;

boton2.addEventListener('click', () => {
    count++;
    contador.textContent = count;
});
