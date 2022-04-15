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

    let cliente1 = [
        {produto: 'Bolsa pequena', valor: 49.0},
        {produto: 'Cinto preto', valor: 22.0},
        {produto: 'Jaqueta Jeans', valor: 300.0},
    ]
    //console.log(cliente1.length)
    console.table(cliente1)
    
    let cliente2 = [
        {produto: 'Calça preta', valor: 100.0},
        {produto: 'Blusa simples', valor: 35.0},
        {produto: 'Calça jeans clara', valor: 130.0},
    ]
    //console.log(cliente2.length)
    console.table(cliente2)
    
    let cliente3 = [
        {produto: 'Blusa preta gola alta', valor: 60.0},
        {produto: 'Short verde canelado', valor:  80.0},
        {produto: 'Salto agulha 39', valor: 250.0},
    ]
    //console.log(cliente3.length)
    console.table(cliente3)
    
    let cliente4 = [
        {produto: 'Tênis casual preto', valor: 120.0},
        {produto: 'meia calça transparente', valor: 30.0},
    ]
    //console.log(cliente4.length);
    console.table(cliente4)
    
    function realizarCompra(arrayDeCompra) {
        let valorTotal = 0
        let descontoAplicado = 0
        let valorFinal = 0
        let quantidadeDeProdutos = arrayDeCompra.length 
    
    
            for(let item of arrayDeCompra) {
                valorTotal += item.valor
               // console.log(`aqui o valor total era ${valorTotal}`)
                if(item.valor >=200){
                    valorFinal += (item.valor *0.5)
                    descontoAplicado += (item.valor *0.5) 
                } else if (item.valor >= 100){
                    valorFinal += (item.valor * 0.8)
                    descontoAplicado += (item.valor * 0.2)
                } else if (item.valor >= 80){
                    valorFinal += (item.valor *0.9)
                    descontoAplicado+= (item.valor *0.1)
                } else if (item.valor >= 50){
                    valorFinal += (item.valor *0.95)
                    descontoAplicado += (item.valor *0.05)
                } else {
                    valorFinal += item.valor
                }
            }
            //console.log(valorTotal)
            let notaFiscal = {
                "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ",")}` ,// usar crase.
                "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
                "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`
            }
         
        if(quantidadeDeProdutos > 10 || valorFinal > 800){
            return console.table({
                ...notaFiscal,
                "Bônus": 'Você ganhou um cupom de R$50,00 para a sua próxima compra'
            })
        } else {
            return console.log(notaFiscal)
        }      
    
    }
    
    realizarCompra(clienteLilit)
    realizarCompra(cliente1)
    realizarCompra(cliente2)
    realizarCompra(cliente3)
    realizarCompra(cliente4)