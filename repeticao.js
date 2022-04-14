const numeros = [3, 4, 5, 0, 3, 5, 7, 5, 4]

// for (let i=0; i< numeros.length; i++) {
//     const dobro = numeros[i] * 2
//     console.log(`o dobro de ${numeros[i]} é ${dobro}`) 

// }
    
    
// for of
for (let numero of numeros) {
    const dobro = numeros [numero]*2
    console.log (`o dobro de ${numeros[numero]} é ${dobro}`)
}

