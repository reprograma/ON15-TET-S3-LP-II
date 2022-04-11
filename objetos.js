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