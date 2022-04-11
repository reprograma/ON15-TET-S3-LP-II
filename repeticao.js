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
    console.log(`número ${u}`)
    u++
}

console.log("--------------------------------------------------------")

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