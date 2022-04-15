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

<<<<<<< HEAD

let clienteLais = [
    {produto: 'Cachecol', valor: 250.0}, 
    {produto: 'Calça branca', valor: 500.0}, 
    {produto: 'Calça jeans', valor: 430.0}, 
    {produto: 'Blusa listrada', valor: 300.0}, 
    {produto: 'Jaqueta', valor: 670.0}]

let clienteBarbara = [
    {produto: 'Meia listrada', valor: 5.0}, 
    {produto: 'Calça moletom', valor: 10.0}, 
    {produto: 'Calça pijama', valor: 8.0}, 
    {produto: 'Calça branca', valor: 7.50}, 
    {produto: 'Blusa regata', valor: 12.80},
    {produto: 'Meia branca', valor: 6.30},  
    {produto: 'Meia colorida', valor: 3.49},
    {produto: 'Meião de futebol', valor: 9.70}, 
    {produto: 'Blusa vermelha', valor: 24.06}]


function aplicarDesconto(listaDeCompra) {
    let descontoAplicado = 0;
    let valorTotal = 0;
    let valorFinal = 0;

    for (let item of listaDeCompra) {
        
        valorTotal += item.valor


        if (item.valor >= 200) {
            descontoAplicado += item.valor * 0.5

        } else if (item.valor >= 100) {
            descontoAplicado += item.valor * 0.2

        } else if (item.valor >= 80) {
            descontoAplicado += item.valor * 0.1

        } else if (item.valor >= 50) {
            descontoAplicado += item.valor * 0.05
        }
    } 

    valorFinal = valorTotal - descontoAplicado
   
    console.log(`O valor total foi R$ ${valorTotal.toFixed(2).replace('.',',')}`
        + `\nO desconto foi de R$ ${descontoAplicado.toFixed(2).replace('.',',')}`
        + `\nO total da sua compra ficou em R$ ${valorFinal.toFixed(2).replace('.',',')}`);
    
    if (valorFinal > 800 || listaDeCompra.length > 10) {
        console.log("Parabéns! Você recebeu um cupom de R$ 50,00 para sua próxima compra"
              + "\n--------------------------------------------------------------------")
    }     
}

aplicarDesconto(clienteLilit)
aplicarDesconto(clienteLais)
aplicarDesconto(clienteBarbara)
=======
function realizarCompra(comprasDaCliente) {
    let valorTotal = 0 // variável com a soma de todos os valores dos produtos sem desconto
    let descontoAplicado = 0 // variável com a soma de todos os descontos aplicados
    let valorFinal = 0 // variável com a soma de todos os valores dos produtos com desconto
    let quantidadeDeProdutos = comprasDaCliente.length

    for(let item of comprasDaCliente) {
        valorTotal += item.valor
        if (item.valor >= 200.0) {
            descontoAplicado += (item.valor * 0.5)
            valorFinal += (item.valor * 0.5)
        } else if (item.valor >= 100.0) {
            descontoAplicado += (item.valor * 0.2)
            valorFinal += (item.valor * 0.8)
        } else if (item.valor >= 80.0) {
            descontoAplicado += (item.valor * 0.1)
            valorFinal += (item.valor * 0.9)
        } else if (item.valor >= 50.0) {
            descontoAplicado += (item.valor * 0.05)
            valorFinal += (item.valor * 0.95)
        } else {
            valorFinal += item.valor
        }
    }

    let dataDaCompra = new Date()
    console.log(dataDaCompra)

    let notaFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }

    if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(clienteLilit)
>>>>>>> 8f8a09e53bc01635e6ba352132c14714869385bb
