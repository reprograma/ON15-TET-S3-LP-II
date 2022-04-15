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


function retonarValoresCompras(arraycomprasDaCliente) {
    let valorTotalSemDesconto = 0
    let descontoAplicado = 0
    let valorTotalComDesconto = 0
    let quantidadeDeProduto = arraycomprasDaCliente.length

    for(let item  of arraycomprasDaCliente) {
        valorTotalSemDesconto += item.valor
        if( item.valor >= 200.0) {
            valorTotalComDesconto += (item.valor * 0.5)
            descontoAplicado += (item.valor * 0.5)
        } else if( item.valor >= 100.0) {
            descontoAplicado += (item.valor * 0.2)
            valorTotalComDesconto += (item.valor * 0.8)
        } else if( item.valor >= 80.0) {
            descontoAplicado += (item.valor * 0.1)
            valorTotalComDesconto += (item.valor * 0.9)
        } else if( item.valor >= 50.0) {
            descontoAplicado += (item.valor * 0.05)
            valorTotalComDesconto += (item.valor * 0.950)
        } else {
            valorTotalComDesconto += item.valor
        }

    }

    let dataEhorarioCompra = new Date()

    let saidaEretorno = {
        "valor Total Sem Desconto": ` R$ ${valorTotalSemDesconto.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": ` R$ ${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Total com Desconto":  ` R$ ${valorTotalComDesconto.toFixed(2).replace('.', ',')}`,
        "Data da Compra": dataEhorarioCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        } )
    }


    if (quantidadeDeProduto > 10 || valorTotalComDesconto > 800.0) {
        return console.table({
            ...saidaEretorno,
            "cupom": "Parabéns, você acabou de ganhar um cupom de R$ 50,00 para ulitizar na próxima compra"
        })
    } else {
        console.table(saidaEretorno)
    }

}

retonarValoresCompras(clienteLilit)
retonarValoresCompras(clienteLeticia)
retonarValoresCompras(clienteAnaCrstina)
