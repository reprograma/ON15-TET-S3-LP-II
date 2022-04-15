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
//swicth/case

let regiao 
switch(regiao){
    case 'nordeste' :
        console.log ('possui 9 estados')
        break;
        case 'norte';
        console.log('possui 7 estados')
        break;
        case 'centro-oeste';
        console.log('possui 3estados e o DF')
        break;
        case 'sudeste'
        console.log('possui 4 estados')
        break;
        case 'sul';
        console.log('possui 3 estados')
        break;
        default:
            console.log('essa região não existe no Brasil')
}

            //exerc´cio de revisão de if ... else
            let noruega = 0.944
let qatar = 0.850
let canada = 0.913
let brasil = 0.755
let japao = 0.891
let vietna = 0.666
let afeganistao = 0.465
let camaroes = 0.512
/*
escala de IDH
 muito baixo 0 - 0.499
 baixo .5 - 0.599
 medio 0.6 - 0.699
 alto.7 -.799
 muitoalto 0.8 - 1
 */
let IDH
if(idh >= 0  && idh  < .5) {
    console.log('muito baixo ')
} else if (idh >= 0.5 && idh <= 0.599){
    console.log('IDH baixo')
} else if(idh >= .6&& idh < .7) {
    console.log('IDH médio')
} else if idh >= .7 && idh < .8) {
    console.log('IDH alto')
} else if (idh >= .8 &&  <=1){
    console.log('IDH muito alto')
} else {
    console.log('IDH inválido')
}



