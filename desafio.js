let Lilit = [
    { produto: 'Bolsa pequena', valor: 49.0 },
    { produto: 'Cinto preto', valor: 22.0 },
    { produto: 'Jaqueta Jeans', valor: 300.0 },
    { produto: 'Calça preta', valor: 100.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Calça jeans clara', valor: 130.0 },
    { produto: 'Blusa preta gola alta', valor: 60.0 },
    { produto: 'Short verde canelado', valor: 80.0 },
    { produto: 'Salto agulha 39', valor: 250.0 },
    { produto: 'Tênis casual preto', valor: 120.0 },
    { produto: 'meia calça transparente', valor: 30.0 }
]

let Jonas = [
    { produto: 'Calça jeans skinny', valor: 150.0 },
    { produto: 'Bolsa média', valor: 99.0 },
    { produto: 'Jaqueta jeans', valor: 300.0 },
    { produto: 'Chinelo', valor: 27.0 },
    { produto: 'Boné', valor: 130.0 },
]

let Maria = [
    { produto: 'Mochila', valor: 210.0 },
    { produto: 'Calça jeans', valor: 100.0 },
    { produto: 'Blaizer', valor: 300.0 },
    { produto: 'Vestido florido', valor: 99.0 },
    { produto: 'Regata branca', valor: 50.0 },
    { produto: 'Sandália', valor: 130.0 },
    { produto: 'Bermuda', valor: 60.0 },
    { produto: 'Tênis casual', valor: 80.0 },
    { produto: 'meia calça transparente', valor: 30.0 },
]




function calcular(cliente) {

    
    let valorTotal = 0;
    let quantidadeTotalPeca = " ";
    let valorDesconto = 0;
    
    
    for (total of cliente) {
        valorTotal += total.valor;
        quantidadeTotalPeca++;
    }
    // Renata, quando executamos 2 repetições/iterações na mesma array quando podemos realizar uma única estamos perdendo na performance da nossa aplicação
    // Poderiamos ter apenas um for que além de calcular o desconto já calcularia também o valorTotal e a quantidadeTotalPeca, né?

    

    for (desconto of cliente) {
        if (desconto.valor >= 50.0 && desconto.valor < 80.0) {
            valorDesconto += desconto.valor * 0.05

        } else if (desconto.valor >= 80.0 && desconto.valor < 100.0) {
            valorDesconto += desconto.valor * 0.1

        } else if (desconto.valor >= 100.0 && desconto.valor < 200.0) {
            valorDesconto += desconto.valor * 0.2
            
        } else if (desconto.valor >= 200.0) {
            valorDesconto += desconto.valor * 0.5

        }
    }

    valorFinal = valorTotal - valorDesconto
    
    const hoje = new Date();

    const dia = hoje.getDate();
    const mes = hoje.getMonth();
    const ano = hoje.getFullYear();

    
    
    let notaFiscal = {
        "Data da Compra": `${dia}/${mes + 1}/${ano}`,
        "A quantidade de peças compradas": `${quantidadeTotalPeca}`,
        "O Valor total da compra sem desconto": `R$ ${valorTotal.toFixed(2).replace('.', ',')}`,
        "O valor total do desconto": `R$ ${valorDesconto.toFixed(2).replace('.', ',')}`,
        "O valor final da compra com desconto": `R$ ${valorFinal.toFixed(2).replace('.', ',')}`,
    }
    
    if (quantidadeTotalPeca >= 10 || valorFinal > 800.0) {
        return console.table({
            
            ...notaFiscal,
            "Presentinho ;)"   : `Parabéns !!! Você recebeu um cupom de R$ 50,00 para a sua próxima compra!`
        
        })
    } else {

        return console.table({
            ...notaFiscal,
            "Obrigada pela sua compra":`Volte Sempre!!!`
        })
    }

}



    calcular(Lilit);
    console.log('-------------------------------------');
    console.log('-------------------------------------');
    calcular(Jonas);
    console.log('-------------------------------------');
    console.log('-------------------------------------');
    calcular(Maria);




    // var valorTotal = 0;
    // var valorDesconto = 0;
    // var valorTotalProduto = 0;

    // for(soma of clienteLilit){
    //     valorTotalProduto += soma.valor;
    //     console.log(valorTotalProduto);
    // }


    // for (i = 0; i < clienteLilit.length; i++) {
    //     valorTotal += clienteLilit.valor;
    //     console.log(valorTotal);
    // }   
    // function somarTotal() {

    // }

    // function quantidadeProdutos() {
    //     for (i = 0; i < clienteLilit.length; i++) {
    //         valorTotalProduto += clienteLilit[i].produto;
    //         return valorTotalProduto;
    //         console.log(valorTotalProduto);
    //     }

    // }

    // function desconto() {
    //     if (valorTotal > 50.0 && valorTotal < 80.0) {
    //         valorDesconto = valorTotal * 0.05
    //         console.log(valorDesconto)
    //     } else if (valorTotal > 80.0 && valorTotal < 100.0) {
    //         valorDesconto = valorTotal * 0.1
    //         console.log(valorDesconto)
    //     } else if (valorTotal > 100.0 && valotTotal < 200.0) {
    //         valorDesconto = valorTotal * 0.2
    //         console.log(valorDesconto)
    //     } else if (valorTotal > 200.0) {
    //         valorDesconto = valorTotal * 0.5
    //         console.log(valorDesconto)
    //     }
    //     return valorDesconto;
    // }

    // function cupom() {
    //     if (valorTotalProduto > 10.0 || valorDesconto > 800.0) {
    //         console.log(`O Total da sua compra foi ${valorTotalDesconto} e você comprou ${valorTotalProduto}. Você recebeu um cupom de R$ 50.0 para sua próxima compra`)

    //         return cupom;
    //     }
    // }

    // somarTotal(clienteLilit);
    // quantidadeProdutos(clienteLilit);
    // desconto(clienteLilit);
    // cupom(clienteLilit);


    console.log('---------------------------------------------------')








    let clienteLilit = [
        { produto: 'Bolsa pequena', valor: 49.0 },
        { produto: 'Cinto preto', valor: 22.0 },
        { produto: 'Jaqueta Jeans', valor: 300.0 },
        { produto: 'Calça preta', valor: 100.0 },
        { produto: 'Blusa simples', valor: 35.0 },
        { produto: 'Calça jeans clara', valor: 130.0 },
        { produto: 'Blusa preta gola alta', valor: 60.0 },
        { produto: 'Short verde canelado', valor: 80.0 },
        { produto: 'Salto agulha 39', valor: 250.0 },
        { produto: 'Tênis casual preto', valor: 120.0 },
        { produto: 'meia calça transparente', valor: 30.0 }]

    function realizarCompra(comprasDaCliente) {
        let valorTotal = 0 // variável com a soma de todos os valores dos produtos sem desconto
        let descontoAplicado = 0 // variável com a soma de todos os descontos aplicados
        let valorFinal = 0 // variável com a soma de todos os valores dos produtos com desconto
        let quantidadeDeProdutos = comprasDaCliente.length

        for (let item of comprasDaCliente) {
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

        if (quantidadeDeProdutos > 10 || valorFinal > 800.0) {
            return console.table({
                ...notaFiscal,
                "Bônus": 'Você ganhou um cupom de R$50,00 para a sua prõxima compra'
            })
        } else {
            return console.table(notaFiscal)
        }
    }

    // realizarCompra(clienteLilit)
