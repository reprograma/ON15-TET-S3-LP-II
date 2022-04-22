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

let clienteJaqGrotto = [
    {produto: 'Bolsa grande', valor: 89.0}, 
    {produto: 'Cinto dourado', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa de babados', valor: 59.0},]
 
let clienteRosario = [
    {produto: 'Macacao longo', valor: 300.0},
    {produto: 'Sandalia Anabelle', valor: 110.0}, 
    {produto: 'Cinto preto', valor: 108.0}, 
    {produto: 'Brinco diamante', valor: 350.0},  
    {produto: 'Bolsa petit', valor: 279.0}, 
    {produto: 'Óculos gucci', valor: 450.0}, ]
   
function fazerCompra(listaDeCompras) {
    let valorTotal = 0 // Soma de todos os produtos s/ desconto.
    let descontoAplicado = 0  // Soma de todos os descontos aplicados.
    let valorFinal = 0 // Total a pg, já aplicado os descontos.
    let qtdProdutos = listaDeCompras.lenght


    for (let item of listaDeCompras) {
        valorTotal += item.valor
        if (item.valor >= 200) {
        valorFinal += (item.valor * 0.5)
        descontoAplicado += (item.valor * 0.5)
     }  else if (item.valor >= 100) {
        valorFinal += (item.valor * 0.8)
        descontoAplicado += (item.valor * 0.2)
     }  else if (item.valor >= 80) {
        valorFinal += (item.valor * 0.9)
        descontoAplicado += (item.valor * 0.1)
     }  else if (item.valor >= 50) {
        valorFinal += (item.valor * 0.95)
        descontoAplicado += (item.valor * 0.05)
     }  else { 
         valorFinal += item.valor
     }
    }

    let dataDaCompra = new Date()
        console.log(dataDaCompra)

    let cupomFiscal = {
        "Valor Total": valorTotal,
        "Desconto Aplicado": descontoAplicado,
        "Valor Final": valorFinal,
        "Compra realizada em": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
        
    }

    if (qtdProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...cupomFiscal,
            "Presente!": "Você ganhou um cupom de R$50,00 para sua próxima compra! =)"
        })

    } else {
        return console.log(cupomFiscal)
    }
}
 
fazerCompra(clienteRosario)



