// let horario = 5

// if (horario >= 0 && horario < 6) { 
//     console.log("madrugada");
// } else if (horario >= 6 && horario < 12) { 
//     console.log("manhã");
// } else if (horario >= 12 && horario < 18) {
//     console.log("tarde");
// } else if (horario >= 18 &&  horario < 24) {
//     console.log("noite");
// } else {
//     console.log("horário inválido"); 
// }

console.log("--------------------------------------------------------")

//switch/case
// Construindo o mesmo caso do if...else acima com switch e limitações de uso!s

let horario = 35;
switch (horario) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("madrugada");
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("manhã");
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("tarde");
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        console.log("noite");
        break;
    default:
        console.log("horário inválido");
        break;
}





console.log("--------------------------------------------------------")
