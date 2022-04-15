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

  
    

let clienteBarbara = [
    
    {produto: 'Perfume La vie en Rose', valor: 250.0}, 
    {produto: 'Saia de Couro', valor: 50.0}, 
    {produto: 'Batom Ruby Woo', valor: 80.0}, 
    {produto: 'Camisa DPR', valor: 60.0}, 
    {produto: 'Ticket Regime Tour', valor: 300.0}, 
    {produto: 'Tenis All Star Branco', valor: 130.0}]
    
    
    function realizarCompra(comprasDaCliente){
        let valorTotal = 0
        let descontoAplicado = 0 
        let valorFinal = 0 
        let quantidadeDeProdutos = comprasDaCliente.length
        
    for(let item of comprasDaCliente){ 
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

            } else { valorFinal += item.valor 
            }
    
    }
       const notaFiscal = {
           "Valor Total": `R$ ${valorTotal.toFixed(2).replace('.', ',')}`,
           "desconto aplicado": `R$ ${descontoAplicado.toFixed(2).replace('.', ',')}`,
           "valor final": `R$ ${valorFinal.toFixed(2).replace('.', ',')}`
       }

        if (quantidadeDeProdutos > 10 || valorFinal > 800){
            console.table({
        ...notaFiscal, 
        "Bônus": 'Uhul, você ganhou um cupom de R$ 50,00 para sua próxima compra.'
        
            })
    }else{
        console.table(notaFiscal)
    }
}
    realizarCompra(clienteBarbara) 

    let clienteBruna =[

    {produto: 'Brinquero FisherPrice', valor: 400.0}, 
    {produto: 'Livro de Programação', valor: 80.0}, 
    {produto: 'Camisa HeavyMetal', valor: 100.0}, 
    {produto: 'Chocolates', valor: 90.0}, 
    {produto: 'Sapatos Infantis', valor: 130.0}, 
    {produto: 'Tenis Vans', valor: 250.0},
    {produto: 'Headfones', valor: 100.0}]


    function realizarCompra (comprasDaCliente){
        let valorTotal = 0
        let descontoAplicado = 0 
        let valorFinal = 0 
        let quantidadeDeProdutos = comprasDaCliente.length
        
    for(let item of comprasDaCliente){ 
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

            } else { valorFinal += item.valor 
            }
    
    }
       const notaFiscal = {
           "Valor Total": `R$ ${valorTotal.toFixed(2).replace('.', ',')}`,
           "desconto aplicado": `R$ ${descontoAplicado.toFixed(2).replace('.', ',')}`,
           "valor final": `R$ ${valorFinal.toFixed(2).replace('.', ',')}`
       }

        if (quantidadeDeProdutos > 10 || valorFinal > 800){
            console.table({
        ...notaFiscal, 
        "Bônus": 'Uhul, você ganhou um cupom de R$ 50,00 para sua próxima compra.'
        
            })
    }else{
        console.table(notaFiscal)
    }
}
    realizarCompra(clienteBruna) 

    