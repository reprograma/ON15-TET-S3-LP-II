const aluna = {
    nome: { primeiro: "Brena",
            segundo: 'Odwyer'},
    idade: 29,
    cidade: "Rio de Janeiro",
    interesses: ['Musica', 'Filmes', 'Séries'],
    saudacao: (data) => `oi meninas, cheguei ${data}`
}

// console.log(aluna)
console.log(aluna.interesses[0])
// console.log(aluna.saudacao('Hoje'))

const professora = new Object()
professora.nome = 'Lilit'
professora.sobrenome = 'Bandeira'
professora.cidade = 'São Paulo'

// console.log(professora)
