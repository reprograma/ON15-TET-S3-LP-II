clienteLilit = [
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
console.log(clienteLilit)
const sumall = clienteLilit.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
console.log(`o valor total da compra da clienteLilit é: ` + sumall);

//segunda cliente
let cliente2 = [
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}]
console.log(cliente2)
const sumall2 = cliente2.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
console.log(`o valor total da compra da cliente 2 é: ` + sumall2);


//terceira cliente
let cliente3 = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}]
console.log(cliente3)
const sumall3 = cliente3.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
console.log(`o valor total da compra da cliente 3 é: ` + sumall3);


//data mês e ano (desafio extra)
const hoje = new Date();
console.log(hoje);


// function desconto(valor){
//     if (valor >= 50.0 && valor <= 79.9){
//             console.log(`Você recebeu um desconto de 5%`);
//             return valor*0.05
//     } else if (valor >= 80.0 && valor <= 99.9){
//             console.log(`Você recebeu um desconto de 10%`)
//             return valor*0.1
//     } else if (valor >= 100.0 && valor <= 199.9){
//             console.log(`Você recebeu um desconto de 20%`)
//             return valor*0.2
//     } else if (valor >= 200.0){
//             console.log(`Você recebeu um desconto de 50%`)
//             return valor*0.5
//     }else {
//         console.log(`sem descontos`)
//         return 0
//     }

// function cupom(valor, produto){
//         if(valor >= 800.0 || produto >= 10){
//             console.log(`Você recebeu um cupom de 50.00 para a próxima compra`);
//         }
//     }

// function compras(produto){
//     valorTotal = 0;
//     valorDoDesconto = 0;
//     valorFinal = 0;
//     totalPecas = 0;
//     for (p of produto){
//         console.log(p.produto);
//         totalPecas ++;
//         valorTotal += p.valor;
//         valorDoDesconto += desconto(p.valor);
//     }
//     valorFinal = valorTotal - valorDoDesconto;
//     console.log('O total de peças é: ' + totalPecas)
//     console.log('O valor total é: R$ '+ valorTotal)
//     console.log('O valor do desconto é: R$ '+ valorDoDesconto)
//     console.log('O valor total final é: R$ '+ valorFinal)

//     cupom(valorFinal, totalPecas)
// }

//     console.log('Total de compras da cliente2')
//     compras(cliente2);





// // condições de desconto
// for (let produto of clienteLilit or cliente2 or cliente3)
// if (valor >= 50.0 && valor <= 79.99) {
//     console.log(`Você recebeu um desconto de 5%`)
// } else if (valor >= 80.0 && valor <= 99.99) {
//     console.log(`Você recebeu um desconto de 10%`)
// } else if (valor >= 100.0 && valor <= 199.99) {
//     console.log(`Você recebeu um desconto de 20%`)
// } else if (valor >= 200.0) {
//     console.log(`Você recebeu um desconto de 50%`)
// } 
//   else if (produto > 10 && totalcompracomdesconto > 800.00) {
//     console.log(`Você recebeu um cupom de 50.00 para a próxima compra`)
//      }
// }