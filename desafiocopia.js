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
  
//     console.log(clienteLilit) havia feito assim, através de pesquisa o Google
// const sumall = clienteLilit.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
// console.log(`o valor total da compra da clienteLilit é: ` + sumall);

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
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(clienteLilit)


// SEGUNDA CLIENTE
let cliente2 = [
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}]

// console.log(cliente2) havia feito assim para somar os valores do array em pesquisa no Google
// const sumall2 = cliente2.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
// console.log(`o valor total da compra da cliente 2 é: ` + sumall2);

//função para verificação de descontos
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

    //desafio extra (data e hora no cupom fiscal)
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

realizarCompra(cliente2)


// TERCEIRA CLIENTE
let cliente3 = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}]
    

// console.log(cliente3) havia feito assim a soma do array em pesquisa no Google (deu certo!)
// const sumall3 = cliente3.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
// console.log(`o valor total da compra da cliente 3 é: ` + sumall3);

//data extra mês e ano 

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
            "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

realizarCompra(cliente3)

