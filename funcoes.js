
// função sem argumentos
// function funcaoUm(){
//     return console.log(`retorno da função que não recebe argumentos`)
// }

// funcaoUm();


// // função com um único argumento
// function funcaoDois(numero){
//     let soma = numero + 3;
//     return console.log(soma)
// }

// funcaoDois(5)

// funcao com mais de um argumento

function funcaoTres(numero1, numero2){
    let soma = numero1 + numero2;
    return console.log(soma)

}

funcaoTres(5, 6)

// let resultado = funcaoTres(5, 7)
// console.log(resultado)


// funcao anônima

// let soma = function (){

// }

// soma()



// Arrow Function

// function nome() {}
// funcao sem argumentos

function somar1() {
    let soma = 1 + 3
    return console.log(soma)
}

somar1()

// funcao com um único argumento

function somar2(numero) {
    let soma = numero + 3
    return console.log(soma)
}

somar2(5)

// funcao com mais de um argumento

function somar3(numero1, numero2) {
    return console.log(numero1 + numero2)
}

let resultado = somar3(5, 7)

console.log(resultado)

somar2(resultado)

// arrow function

// () => {}

let somar3 = (numero1, numero2) => console.log(numero1 + numero2)

somar3(10,15)

somar3(6, 3)
