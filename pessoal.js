let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]  

let clienteLeticia = [
    {produto: 'Jaqueta Jeans clara', valor: 300.0}, 
    {produto: 'Calça branca', valor: 100.0},  
    {produto: 'Calça jeans ', valor: 130.0}, 
    {produto: 'Salto agulha 37', valor: 250.0}, 
    {produto: 'Tênis casual azul', valor: 120.0},
    {produto: 'Tênis casual vermelho', valor: 120.0},
    {produto: 'Tênis casual amarelo', valor: 120.0},
    {produto: 'Tênis casual verde', valor: 120.0}]

let clienteAnaCrstina = [
    {produto: 'Cinto aul', valor: 22.0},  
    {produto: 'Calça jeans clara com brilho', valor: 130.0}]



// valor total dos produtos da compra da cliente


let somaDosValoresProdutos = clienteLilit.reduce((valorAcumulado, valorDosProduto) => valorAcumulado + valorDosProduto.valor, 0);
   console.log(somaDosValoresProdutos)





// lista  com todos os valores da compra da cliente, para realizar os descontos 

let valoresParaDescontos = [49, 22, 300, 100, 35, 130, 60, 80, 250, 120, 30];

for (valor of valoresParaDescontos) {
    if (valor >= 50.0 && valor < 80.0) {
        console.log(valor * 0.05)}
    else if (valor >= 80.0 && valor < 100.0) {
        console.log(valor * 0.10)}
    else if (valor >= 100.0 && valor < 200.0) {
        console.log(valor * 0.20)}
    else if (valor >= 200.0) {
        console.log(valor * 0.50)}
    else
        console.log("sem desconto")

}


// Lista  com todos os descontos que a cliente obteve, e tendo como resultado a soma total dosdescontos

let valorDoDesconto = [150, 20, 26, 3, 8, 125, 24]
let soma = 0

for (let somaDosDescontos = 0; somaDosDescontos < valorDoDesconto.length; somaDosDescontos++) {
    soma += valorDoDesconto[somaDosDescontos]
}

console.log(soma)






// Valor total com os descontos 

function  valorFinalTotal(){
    const valorFinal = somaDosValoresProdutos - soma
    return(valorFinal)
}

console.log(valorFinalTotal())





// A cliente vai ter direito a um cupom de desconto na próxima compra ou não


let quantidadeDeProduto = 11
let valorTotalComDesconto = 820.0

if (quantidadeDeProduto > 10 || valorTotalComDesconto > 800.0) {
    console.log("A cliente tem direito a um cupom de R$50.0 para a próxima compra")
} else {
    console.log("A cliente não tem direito a um cupom de R$50.0 para a próxima compra")
}

// function cupom(quantidadeDeProduto, valorTotalComDesconto) {
//     let cupom1 = quantidadeDeProduto || valorTotalComDesconto
//     return(cupom1)
// }

// console.log(cupom())






// retorno das compras pra a cliente



function retornoDaCompra() {
    return(`A cliente realizou compras no valor total de R$ ${somaDosValoresProdutos}, e obteve o desconto  total de R$ ${soma} que foi aplicado , totalizando o valor final das compras em R$ ${valorFinalTotal()}.`)
}

console.log(retornoDaCompra())