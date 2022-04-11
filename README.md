# ON15-TodasEmTech-S3-Lógica de Programação-II

Esta é a 3ª semana da turma online Todas em Tech on15 - Back-end, nesta aula do dia 09/04/2022 teremos os seguintes conteúdos:

- Revisão da estruturas condicionais;
- Estruturas de repetição;
- Escopo;
- Funções;
- Objetos;

## Apresentação

### Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=500 alt='selfie em preto e branco da Lilit com cabelos cacheados longos preso em rabo de cavalo no topo da cabeça caído para a direita, o fundo está é predominantemente branco e tem uma TV'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), é uma travesti paraibana residente no São Paulo, Software Engineer no Nubank, ex-aluna {reprograma} e professora também no minas programam;

#### Contatos

- E-mail: devlilitbandeira@gmail.com
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/shinobu.jpg' width=500 alt='personagem shinobu do anime kimetsu no yaiba, ela tem cabelos pretos com pontas roxas amarrados para trás presos por um item em formato de borboleta e tem franja repartida ao meio, olhos roxos, veste um kimono branco com estampa de asa de borboleta e uma camisa fechada preta por baixo, segura uma espada em posição de saque, ao fundo o várias borboletas das cores rosa e roxo'>

### Quem são as alunas?

<img src='./assets/madoka.jpg' width=500 alt='5 personagens do anime madoka mágica, todas vestem vestidos colegiais, cada uma com uma cor, esquerda para direita temos a primeira com cabelos loiros amarrados com vestido amarelo, segunda tem cabelos curtos azuis, vestido azul e segura uma espada, no meio uma de cabelos rosa amarrados em dois coques laterais com laços, seu vestido também é rosa, a quarta tem cabelos longos vinho e vestido da mesma cor, a quinta tem cabelos pretos longos e soltos e usa vestido cinza, ao fundo um gradiente de cor que varia entre branco, amarelo e rosa, de cima para baixo'>

## Acordos

- Enviar dúvidas no chat com as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;

## Plano de aula

---
### 1. Revisão das estruturas condicionais

#### 1.1. Switch/case

- A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula `case`, e executa as instruções associadas ao case. *(MDN)* Passamos o `break` para sair da condicional quando um case é correspondido e sua instrução executada. Caso nenhum case seja correspondido podemos usar a cláusula `default` (opcional)

```jsx
let regiao = 'centro-oeste'

switch (regiao) {
    case 'nordeste':
        console.log('possui 9 estados');
        break;
    case 'norte':
        console.log('possui 7 estados');
        break;
    case 'centro-oeste':
        console.log('possui 3 estados e DF');
        break;
    case 'sudeste':
        console.log('possui 4 estados');
        break;
    case 'sul':
        console.log('possui 3 estados');
        break;
}
```

#### 1.2. Exercício de fixação do `if... else`

- Vamos criar uma lógica que verifique e retorne a classificação do IDH dos seguintes países de acordo com o a Escala de IDH do Programa das Nações Unidas para o Desenvolvimento – PNUD da ONU

```js
let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512
```

<img src='./assets/idh.jpg' width=700 alt='índice que mede IDH'>

---
### 2. Estruturas de repetição

- Podemos chamar também de Loop, laço ou método de iteração. Trata-se de comandos que mantém um trecho de código sendo executado até que uma condição de parada seja satisfeita;
- Sua principal função é possibilitar que possamos repetir um trecho de código sem a necessidade de escrever várias vezes esse trecho, para isso basta ter um ponto de partida e um ponto de chegada para a repetição;

#### 2.1. `for`

- É uma estrutura de repetição com variável de controle, usada quando se sabe exatamente o ponto de partida e de chegada, o bloco será repetido enquanto a condição for verdadeira, ou seja, para quando a condição retorne `false`.

```js
  for (expressaoInicial; condicao; incremento) {
    código aqui;
  }
```

##### Exemplos:

```js
  for(let i = 0; i < 10; i++){ 
      console.log(`número ${i}`)
  }

  // Exemplo numa array (estrutura de dados que veremos nas próximas aulas)

  const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2]

  for (let i = 0; i < numeros.lenght; i++) {
    const dobro = numeros[i] * 2;
    console.log(dobro);
  }
```

#### 2.2. `while`

- Tem um funcionamento muito parecido com o do `for`, de executar sua intrução desde que a condição seja verdadeira, é sempre possível substituir o uso do `for` pelo do `while`, sendo o critério obter o código de melhor leitura, o `while` está mais atrelado à condição ser atendida enquanto o `for` é mais usado para iterar com contadores. 

```js
  while (condicao) {
    código aqui;
  }
```

##### Exemplos:

```js
  let i = 1;
  while(i <=3) {
    console.log(`número ${i}`)
    i++
  }

// Exemplo numa array utilizando a mesma variável números criada no exemplo do for.

  let i = 0;
  while (i < numeros.lenght) {
    const dobro = numeros[i] * 2;
    console.log(dobro);
    i++;
  }
```

#### 2.3. `do... while`

- O `do`...`while` também repete até que a condição especificada seja falsa. Porém sua intrução é sempre executado pelo menos uma vez, independente da condição, pois primeiro ele faz `do` e depois testa a condição no `while`.

```js
  do {
    código aqui;
  } while (condicao);
```

##### Exemplos:

```js 
  let total = 0; 
  let contador = 0;

  do{
      total += contador * 100;
      contador++
      console.log(`contando...${contador}`)

  } while(contador < 10)
```

#### 2.4. `for... of`

- É um laço que percorre objetos iterativos, sendo o mais comum a array, chamando uma função para cada valor deste objeto;

```js
  for (variavel of iteravel) {
    declaração
  }
```

##### Exemplo:

```js
  // utilizaremos a mesma array números criada no exemplo do for.
  for (let numero of numeros) {
    const dobro = numero * 2;
    console.log(dobro);
  }
```

---
### 3. Escopo
  
  - É o contexto atual de execução, em que valores e expressões são "visíveis" ou podem ser referenciadas. *(MDN)* Podemos entender como um "lugar/parte" do código;
  
  - Se uma variável ou outra expressão não estiver "no escopo atual", então não está disponível para uso. *(MDN)*

  - Podemos separar basicamente os escopos em global que pode ser o `arquivo.js` onde o script se encontra ou ainda o escopo global de uma função* e local (ou de bloco) que se refere à qualquer bloco de código definido por {};

      * Uma função/function serve como um procedimento em JavaScript, e portanto, cria um escopo, de modo que (por exemplo) uma variável definida exclusivamente dentro da função não pode ser acessada de fora da função ou dentro de outras funções. *(MDN)*
  
  - Os escopos possuem camadas baseadas numa hierarquia, de modo que os escopos filhos tenham acesso aos escopos pais, mas não no sentido oposto.

---
### 4. Funções
  - É um bloco de comandos a serem executados quando solicitado, através de uma chamada direta ou em decorrência de um evento;
  - Uma função é o menor bloco de execução/construção no JavaScript, um conjunto de instruções que executa uma tarefa ou calcula um valor;
  - Uma função quando é chamada, pausa a thread (script) para realizar seu processamento, depois retorna o valor final e continua a execução da linha de código na sequência;

#### 4.1. Declarando uma função

- O método mais comum de criar uma função no JS consiste no uso da palavra reservada `function`;
- Em seguida nomeamos a função, é uma boa prática nomear com verbo para indicar a ação realizada pela função;
- `()` com a lista de argumentos, caso seja necessário, separados por vírgulaç
- `{}` definição do escopo que recebe a o código que será executado quando a função foi invocada;
- `return` é a indicação do que a função deve retornar, também interrompendo o a execução do trecho de código em que está inserida;

```js
  
  // funcao sem argumentos

  function funcaoUm() {
    return console.log(`retorno da função que não recebe argumentos`)
  }

  // funcao com um único argumento

  function funcaoDois(argumento) {
    return console.log(`retorno da função que recebe um argumentos, neste caso foi ${argumento}`)
  }

  // funcao com mais de um argumento

  function funcaoTres(numeroUm, numeroDois) {
    let soma = numeroUm + numeroDois
    return console.log(`soma = ${soma}`)
  }

  funcaoUm();
  funcaoDois('reprograma');
  funcaoTres(2, 7);

  // funcao anonima

  let funcao4 = function () {
    return console.log('retorno da função anônima')
  } // muito utilizado quando vamos passar a função como parâmetro para outra função

  let soma = function(numero) {return numero * numero};
  console.log(soma(3))
```

#### 4.2. Arrow Function

- Uma sintaxe mais curta e moderna em relação a expressão `function` e podem substituir em quase todos os casos de forma a diminuir a complexidade de leitura em diversos casos;
- As arrow functions são geralmente anônimas, mas podem ser nomeadas* ou atribuidas a variáveis para que possam ser invocadas; 
- Estas expressões de funções tem algumas limitações e são melhor utilizadas em funções que não sejam métodos e nem devem ser usadas como construtores;

```js
  function somar(x, y) {
    return console.log(x + y)
  }

  // sintaxe () => {}
  let somar = (x, y) => console.log(x + y)
  // quando a execução da função ocupa apenas uma linha de código não há neessidade nem do uso do {} e nem do return, simplificando ainda mais a sintaxe
```

- A sintaxe das arrow functions é bastante comum em padrões funcionais como muito do que aprenderemos em métodos de arrays nas próximas aulas;

---
### 5. Objetos

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). (MDN) Os objetos são formados por chave e valor

#### 5.1. Criando um objeto:

```js

const professora = new Object()
  professora.nome = "Lilit"
  professora.sobrenome = "Bandeira"
  professora.cidade = "São Paulo"

const aluna = {
  nome: { primeiro: "Gabriela", segundo: "Lemos" },
  idade: 20,
  cidade: "São Paulo",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),

};
```

#### 5.2. Acessando o valor de uma propriedade ou método de objetos usando:

##### 5.2.1. Notação de ponto - Digitando o ponto, podemos acessar todos as propriedades e métodos encapsuladas dentro do objeto

```js
console.log(aluna.nome.primeiro);
aluna.saudacao();
```

##### 5.2.2. Notação de cochetes - Usamos as chaves (como strings) para acessar o valor de um item

```js
console.log(aluna["nome"]["primeiro"]);
console.log(aluna["idade"]);
console.log(aluna["interesses"][0]);
```

#### 5.3. Desestruturando um objeto:

```js
const { idade, saudacao } = aluna;
```

#### 5.4. Objeto Date e seus métodos;

- Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC). (MDN)

- O método toLocaleDateString() retorna uma string com a representação de parte da data baseando-se no idioma. (MDN) Argumentos locales e options

```js
const hoje = new Date();

console.log(hoje); // 2022-04-09T10:56:49.693Z

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

console.log(`${dia}/${mes + 1}/${ano}`); // 09/04/2022 🤔

const dataFormatada = hoje.toLocaleDateString("pt-BR");
console.log(dataFormatada); // 09/04/2022

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dataLonga = hoje.toLocaleDateString("pt-BR", options);
console.log(dataLonga); // sábado, 9 de abril de 2022
```

---
### 6. Desafio da semana

#### Crie uma aplicação para uma loja de roupas que deseja realizar um super programa de descontos: 
  
1. Regras de negócio:
  - Peças a partir de R$50,00  - desconto de 5%
  - Peças a partir de R$80,00  - desconto de 10%
  - Peças a partir de R$100,00 - desconto de 20%
  - Peças a partir de R$200,00 - desconto de 50%
  - No caso de uma cliente comprar acima de 10 peças ou o total da compra com descontos for maior que R$800,00 ela recebe ainda um cupom de R$50,00 para sua próxima compra, esta informação deve ser retornada junto ao valor final da compra;  

2. Critérios de aceite:
  - Crie uma função que calcule a compra das clientes e aplique toda a lógica necessária;
  - O retorno deve ser o valor total (soma dos valores dos produtos), desconto aplicado e valor final (valor total - descontos) e a informação do cupom ganho, caso se aplique;
  - Como DESAFIO EXTRA o retorno pode conter também Data e Hora da compra;
  - A simulação do seu código deve atender 3 clientes, uma delas é a Lilit que realizou a seguinte compra:
    
  ```js

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
      
  ```
     
  - As outras duas clientes devem ser criadas por vocês e seguir o modelo de dados usado na clienteLilit, a quantidade de itens comprados fica ao seu critério;
  
3. Dicas para a execução do exercício:
  - Observe que este exercício aplica os conceitos aprendidos até agora de função, estrutura de repetição, estrutura condicional, operadores, variáveis e lógica;
  - Observe também que a variável cliente é uma lista de dados (Array), que apesar de nao termos estudado à fundo, já sabemos como iterar (percorrer cada elemento) através do `for` ou `for... of` (estejam livres para usar outros tipos de métodos de iteração caso queiram);
  - Uma função que recebe uma array como argumento resolve muito bem esse problema, certo?

---
### 7. Referências

¹ https://atlassocioeconomico.rs.gov.br/indice-de-desenvolvimento-humano-idh-e-idhm#:~:text=O%20%C3%8Dndice%20de%20Desenvolvimento%20Humano,o%20Desenvolvimento%20%E2%80%93%20PNUD%20da%20ONU.

² https://www.br.undp.org/content/brazil/pt/home/idh0/rankings/idh-global.html

³ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript 