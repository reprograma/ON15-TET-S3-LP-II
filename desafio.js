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


    let clienteCarol = [
        {produto: 'Calça jogger', valor: 150.0}, 
        {produto: 'Sandalia Mule', valor: 250.0}, 
        {produto: 'Jaqueta de couro', valor: 400.0}, 
        {produto: 'Calça preta', valor: 100.0}, 
        {produto: 'Blusa social', valor: 400.0}, 
        {produto: 'Vestido midi', valor: 120.0}, 
        {produto: 'Meia esporte Nike', valor: 50.00}]


        let clienteBia = [
            {produto: 'Calça de moletom', valor: 140.0}, 
            {produto: 'Bolsa', valor: 100.0}, 
            {produto: 'Jaqueta Jeans', valor: 300.0}, 
            {produto: 'Calça Jeans', valor: 350.0}, 
            {produto: 'Macacão', valor: 80.0}, 
            {produto: 'Blusa simples', valor: 35.0}, 
            {produto: 'meia calça transparente', valor: 30.0}]
            function realizarCompra(comprasDaCliente) {
                let valorTotal = 0 
                let descontoAplicado = 0
                let valorFinal = 0 
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
                        "Ebaa": 'Você acaba de ganhar um cupom de R$50,00 para a sua prõxima compra'
                    })
                } else {
                    return console.table(notaFiscal)
                }
            }
            
            realizarCompra(clienteLilit)
            realizarCompra(clienteCarol)
            realizarCompra(clienteBia) 