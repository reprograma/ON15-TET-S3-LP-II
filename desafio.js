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

let clienteDeborah = [
    {produto: 'Mangá One Piece', valor: 22.0},
    {produto: 'Planner', valor: 80.0},
    {produto: 'Nintendo Switch', valor: 200.0},
    {produto: 'Relógio de Pulso', valor: 100.0},
    {produto: 'Funko Pop', valor: 150.0},
    {produto: 'Camisa Temática', valor: 60.0},
    {produto: 'Caneca', valor: 50.0},
    {produto: 'Jogo de Video-game', valor: 300.0},
    {produto: 'Livro de Psicologia', valor: 130.0},
    {produto: 'Pijama', valor: 50.0},
    {produto: 'Fone de Ouvido',valor: 180.0}]
    
let clienteNami = [
    {produto: 'Brincos de Argola', valor: 70.0},
    {produto: 'Canetas Tinteiro', valor: 350.0},
    {produto: 'Laranjas Cravo', valor: 40.0},
    {produto: 'Papel', valor: 10.0},
    {produto: 'Vestido Azul', valor: 100.0},
    {produto: 'Salto Alto Verde', valor: 80.0},
    {produto: 'Régua', valor: 30.0},
    {produto: 'Pulseiras de Ouro', valor: 400.0},
    {produto: 'Livros de Meteriologia', valor: 200.0},
    {produto: 'Maquiagem', valor: 60.0},
    {produto: 'Bíquini',valor: 150.0}]

function realizarCompra(comprasdaCliente) {
    let valorTotal = 0
    let descontoAplicado = 0
    let valorFinal = 0
    let quantidadeDeProdutos = comprasdaCliente.length
    
    for(let item of comprasdaCliente) {
        valorTotal += item.valor
        if (item.valor >= 200.0) {
            valorFinal += (item.valor * 0.5)
            descontoAplicado += (item.valor * 0.5)
        } else if (item.valor >= 100.0) {
            valorFinal += (item.valor * 0.8)
            descontoAplicado += (item.valor * 0.2)
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
    
    if (quantidadeDeProdutos > 10 || valorFinal > 800.0) {
            return console.table({
                 ...notaFiscal,
                 "Bônus": 'Você ganhou um cupom de R$50,00 para a sua próxima compra',
             })
    } else {
        return console.table(notaFiscal)
    }
    
}    
    
realizarCompra(clienteLilit)
realizarCompra(clienteDeborah)
realizarCompra(clienteNami)
