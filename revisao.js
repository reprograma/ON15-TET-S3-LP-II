if (horario >= 0 && horario < 6) { 
    console.log("madrugada");
} else if (horario >= 6 && horario < 12) { 
    console.log("manhã");
} else if (horario >= 12 && horario < 18) {
    console.log("tarde");
} else if (horario >= 18 &&  horario < 24) {
    console.log("noite");
} else {
    console.log("horário inválido"); 
}

// switch/case

let regiao 

switch (regiao) {
    case 'nordeste':
        console.log('possui 9 estados')
        break;
    case "norte":
        console.log('possui 7 estados')
        break;
    case 'centro-oeste':
        console.log('possui 3 estados e o DF')
        break;
    case 'sudeste':
        console.log('possui 4 estados')
        break;
    case 'sul':
        console.log('possui 3 estados')
        break;
    default: 
    console.log('essa regiao não existe no Brasil') // se alguém digitar um valor diferente de uma região
}

