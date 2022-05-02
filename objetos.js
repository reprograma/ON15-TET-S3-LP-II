
// Objeto é uma coleção de dados vinculados ao mesmo contexto - chave:valor

const aluna = {
    nome: {
        primeiro: "Renata",
        segundo: "Santos"
    },
    idade: 42,
    cidade: "São Paulo",
    interesses: ["Musica", "Filmes", "Viagens"],
    ola: (nome) => console.log(`Olá, ${nome}`),
    saudacao: function () {
        return `Olá, meu nome é ${this.nome}`
    }
}
console.log(aluna.nome.primeiro)
console.log(aluna.saudacao());
console.log(aluna.interesses[2])
// console.log(aluna.ola("Doido"));

// par de valores
// const array = [value1, value2, value3];

const professora = new Object();
professora.nome = "Lilit";
professora.sobrenome = "Bandeira";
professora.cidade = "São Paulo";

// console.log(aluna)
// console.log(aluna.nome)
// // console.log(aluna.ola("Julia"))
// console.log(professora)

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

