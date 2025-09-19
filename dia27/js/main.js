//ejercicio 1 - 1 
console.log("EJERCICIO 1 - 1");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

//ejercicio 1 - 2
console.log("\nEJERCICIO 1 - 2");
console.log(array[3]);
console.log(array[6]);

//ejercicio 1 - 3
console.log("\nEJERCICIO 1 - 3");
console.log(array.lenght);

//ejercicio 1 - 4
console.log("\nEJERCICIO 1 - 4");
array.unshift(0);
console.log(array);

//ejercicio 1 - 5
console.log("\nEJERCICIO 1 - 5");
array.push(11);
console.log(array);

//ejercicio 1 - 6
console.log("\nEJERCICIO 1 - 6");
array.splice(5, 2);
console.log(array);

//ejercicio 2 - 1
console.log("\nEJERCICIO 2 - 1");
let pos = array.indexOf(4);
console.log(pos);

//ejercicio 2 - 2
console.log("\nEJERCICIO 2 - 2");
array.reverse()
console.log(array);

//ejercicio 2 - 3
console.log("\nEJERCICIO 2 - 3");
let text = array.join (", ");
console.log(text);

//ejercicio 2 - 4
console.log("\nEJERCICIO 2 - 4");
let array2 = text.split (", ");
console.log(array2);

//ejercicio 2 - 5
console.log("\nEJERCICIO 2 - 5");
array.forEach((num, i) => {
    console.log(`El elemento en la posicion ${i} es ${num}`);
});

//ejercicio 2 - 6
console.log("\nEJERCICIO 2 - 6");
array.forEach((num, i) => {
    console.log(num * 2);
});

//ejercicio 3 - 1
console.log("\nEJERCICIO 3 - 1");
let find = array2.find((num) => num.includes > ("7"));
console.log(find);

//ejercicio 3 - 2
console.log("\nEJERCICIO 3 - 2");
let filter = array.filter((num) => num > 5);
console.log(filter);

//ejercicio 3 - 3
console.log("\nEJERCICIO 3 - 3");
let sum = array.reduce((acc, num) => acc + num, 0);
console.log(sum);

//ejercicio 3 - 4
console.log("\nEJERCICIO 3 - 4");
let array3 = [5, 6, 7];
let [a, b, c] = array3;
console.log(a,b,c);

//ejercicio 3 - 5
console.log("\nEJERCICIO 3 - 5");
let array4 = ['perro', 'gato', 'raton', 'pez', 'loro', 'tortuga'];
let lista = document.getElementById("lista");
let lis = array4.map( animal => {
    let li =document.createElement("li");
    li.textContent = animal;
    return li;
})

lis.forEach(li => lista.appendChild(li));