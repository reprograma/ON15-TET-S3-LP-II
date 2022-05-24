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

let clienteRafa = [
    {produto: 'Jogo de Uno', valor: 19.0}, 
    {produto: 'Domino', valor: 22.0}, 
    {produto: 'Conjunto Moletom', valor: 429.0}, 
    {produto: 'Short Flamengo', valor: 139.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça Cargo', valor: 130.0}, 
    {produto: 'Blusa preta ', valor: 60.0}, 
    {produto: 'Bone', valor: 80.0}, 
    {produto: 'Tenis casual', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'Havaiana', valor: 30.0}] 

let clienteGabi = [
    {produto: 'Panela de Pressão', valor: 219.0}, 
    {produto: 'Frigideira AntiAderente', valor: 129.0}, 
    {produto: 'Jogo de Talher', valor: 60.0}, 
    {produto: 'Liquidificador Arno', valor: 139.0}, 
    {produto: 'Blusa Toalha de Mesa', valor: 35.0}, 
    {produto: 'Panos de Prato', valor: 130.0}, 
    {produto: 'Cuzcuzeira', valor: 49.0}, 
    {produto: 'Assadeira', valor: 80.0}, 
    {produto: 'Panele de Arroz Eletrica', valor: 120.0}, 
    {produto: 'Sanduicheira', valor: 120.0}, 
    {produto: 'Abridor', valor: 30.0}] 

function realizarCompra(comprasDaCliente) {
    let valorTotal = 0 // variável com a soma de todos os valores dos produtos sem desconto
    let descontoAplicado = 0 // variável com a soma de todos os descontos aplicados
    let valorFinal = 0 // variável com a soma de todos os valores dos produtos com desconto
    let quantidadeDeProdutos = comprasDaCliente.length

    for(let item of comprasDaCliente) {
        let desconto = 0
        valorTotal += item.valor
        if (item.valor >= 200.0) {
            desconto = (item.valor * 0.5)
            descontoAplicado += desconto
            valorFinal += (item.valor - desconto)
        } else if (item.valor >= 100.0) {
            desconto =(item.valor * 0.2)
            descontoAplicado += desconto
            valorFinal += (item.valor - desconto)
        } else if (item.valor >= 80.0) {
            desconto = (item.valor * 0.1)
            descontoAplicado += desconto
            valorFinal += (item.valor - desconto)
        } else if (item.valor >= 50.0) {
            desconto = (item.valor * 0.05)
            descontoAplicado += desconto
            valorFinal += (item.valor - desconto)
        } else {
            valorFinal += item.valor
        }
    }

    let dataDaCompra = new Date()
    
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
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua próxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(clienteLilit)
realizarCompra(clienteRafa)
realizarCompra(clienteGabi)