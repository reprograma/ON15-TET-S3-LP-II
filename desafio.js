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

let clientePaola= [
    {produto: 'Bolsa grande', valor: 110.0}, 
    {produto: 'Cinto marron', valor: 25.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça azul', valor: 200.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Saia Longa', valor: 129.95}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Vestido estampa animal', valor: 79.95}, 
    {produto: 'Tênis casual branco', valor: 120.0}, 
    {produto: 'Vestido midi babado open', valor: 119.95}]

let clienteSuzana = [
    {produto: 'Bolsa infantil unicórnio', valor: 75.0}, 
    {produto: 'Jaqueta Infantil coração', valor: 119.0}, 
    {produto: 'Blusa Infantil estampa unicórnio', valor: 20.0}, 
    {produto: 'Pijama infantil', valor: 129.9}]        

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

    console.log('==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==')
    console.log('                               CUPOM FISCAL                                        ')
    console.log('==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==')

    let notaFiscal = {
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'}),
        "Valor Total": `R$ ${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$ ${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$ ${valorFinal.toFixed(2).replace('.', ',')}`
        
        
    }

    if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
            "Bônus": 'Parabéns! Você ganhou um cupom de R$50,00 para a sua prõxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(clienteLilit)
realizarCompra(clientePaola)
realizarCompra(clienteSuzana)