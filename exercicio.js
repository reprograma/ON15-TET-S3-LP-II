// Exercicio de Fixação de IF...ELSE (Revisão)

// Vamos criar uma lógica que verifique e retorne a classificação do IDH dos seguintes países de acordo com o a Escala de IDH do Programa das Nações Unidas para o Desenvolvimento – PNUD da ONU

let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512

let idh = afeganistao;



if (idh >= 0 && idh < .5) {
    console.log(`O país com IDH ${idh} está na faixa de Muito baixa`);
} else if (idh >= 0.500 && idh <= 0.599) {
    console.log(`O país com IDH ${idh} está na faixa de Baixa`);
} else if (idh >= .6 && idh < .7) {
    console.log(`O país com IDH ${idh} está na faixa Média`);
} else if (idh >= .7 && idh <= 0.799) {
    console.log(`O país com IDH ${idh} está na faixa Alta`);
} else if (idh >= .8 && idh <= 1) {
    console.log(`O país com IDH ${idh} está na faixa Muito Alta`);
}   else {
    console.log(`O país com IDH ${idh} está inválido`);
}   


