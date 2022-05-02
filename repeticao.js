
// for

for (let i = 0; i <= 10; i++) {
    console.log(`número ${i}`);
}

console.log("--------------------------------------------------------")

for (let i = 0; i <= 10; i++) {
    let soma = i + i;
    console.log(`A soma de ${i} com ${i} é ${soma}`);
}


console.log("--------------------------------------------------------")

const numeros = [5,6,4,8,25,3,84,12,9,78];

for (let i = 0; i < numeros.length; i++) {
    const dobro = numeros[i] * 2;
    console.log(`O dobro de ${numeros[i]} é ${dobro}`);
}

// const letras = ["a", "u", "i", "o", "e"];
// console.log(letras [3]);

console.log("--------------------------------------------------------")

// While
// while (condição) {   
//     // código a ser executado
// }

let u = 0;
while (u <= 10){
    if(u == 2){
        console.log(`número ${u}`)
        u = u + 4
    }

// for 

for (let i = 0; i <= 10; i++) {
    console.log(`número ${i}`)
}

for (let i = 0; i <= 10; i++) {
    let soma = i + i
    console.log(`a soma de ${i} com ${i} é ${soma}`)
    // console.log('a soma de ' + i + ' com ' + i + ' é ' + soma)
}

const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2, 5, 7, 1, 3]
console.log(numeros.length) // retorna o numero de elementos
console.log(numeros[4]) // retorna 5 - o valor do elemento de índice 4
// primeiro elemento = elemento 0
// segundo elemento = elemento 1

for (let i = 0; i < numeros.length; i++) {
    const dobro = numeros[i] * 2
    console.log(`o dobro de ${numeros[i]} é ${dobro}`) 
}

const letras = ['a', 'h', 'u', 'd']
console.log(letras[2])

// while

let u = 0;

while (u <= 10) {

    console.log(`número ${u}`)
    u++
}

console.log("--------------------------------------------------------")

let y = 15;
let y = 15; 

let y = 15; 

while (y < numeros.length) {
    const dobro = numeros[y] * 2
    console.log(dobro)
    y++
}


console.log("--------------------------------------------------------")

// do...while

let total = 0 
let contador = 0 

do {
    total += contador * 100
    contador++
    console.log(`contador....${contador}`)
    console.log(`Total: ${total}`)
} while (contador < 10)

console.log("--------------------------------------------------------")

// for...of (para cada condição faça)
// Um for para objetos iterativos (array, string, etc). 

let lista = [1,2,3,4,5,6,7]
for (let i = 0; i < lista.length; i++) {
    const dobro = lista[i] * 2
    console.log(`o dobro de ${lista[i]} é ${dobro}`)
}

console.log("--------------------------------------------------------")

for (let numero of lista) {
    const dobro = lista[numero] * 2
    console.log(`o dobro de ${lista[numero]} é ${dobro}`)
}
// para cada numero do array lista faça

// do... while

let total = 0
let c = 0

do {
    total += c * 100
    c++
    console.log(`contador: ${c}`)
    console.log('total: ' + total)
} while(c < 10)

// for ... of

for (let numero of numeros) {
    const dobro = numeros[numero] * 2
    console.log(`o dobro de ${numeros[numero]} é ${dobro}`)
}

