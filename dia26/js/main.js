//ejemplo 1

let a = 6;
let result = 'Menor a 0';

if (a > 0) {
    result = 'Mayor a 0';
}

console.log(result);

//ejemplo 2

const mayorEdad = 10;
if(mayorEdad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");        
}

//ejemplo 3

let x = 33;

if (x > 50) {
    console.log("Es mayor a 50");
} else if (x < 5) {
    console.log("Es menor a 5");
} else { 
    console.log("Esta entre 5 y 50");
}

//ejemplo 4

const mascota = 'loro';

switch (mascota) {
    case "perro":
        console.log("Tengo un perro");
        break;
    case "gato":
        console.log("Tengo un gato");
        break;
    case "loro":
        console.log("Tengo un loro");
        break;
    default:
        console.log("No tengo mascota");
        break;
}

//ejemplo 5

let str = '';

for (let i = 0; i < 15; i++) {
    str = str + 1;
}

console.log(str);

//ejemplo 6

let n = 1;

while (n < 3) {
    n++;
}

console.log(n);

//ejemplo 7

let resultado = '';
let i = 0;

do {
    i = i + 1;
    resultado = resultado + i;
} while (i < 9);

console.log(resultado);

//ejemplo 8

const array1 = ['3', '5', '8'];

array1.forEach((element) => console.log(element + 5));


