
/*
function saudacao(nome) {
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >= 21) {

        return `boa noite ${nome}`;
    } else {
        return `boa tarde ${nome}`;
    }
}

console.log(saudacao(`rafael`));

*/
/*
function saudacao (nome){
    console.log(`bom dia ${nome}`);
    return `função saudacao foi executado com sucesso`
}

const variavel = saudacao(`rafael`);
saudacao(`LEANDRO`)
saudacao(`LEONARDO`)
*/

/*
function soma(x = 1, y = 1){ // se eu não enviar nenhum valor o x e o Y assumem o 1 como valor 
    let resultado = x + y;  //não tem como acessar o valor dessa variavel fora do campo function
    return resultado;
}

console.log(soma());
*/



// let raiz = function (n){
//     return n ** 0.5
// };

let raiz = n => n ** 0.5; // quando é uma função de uma unica linha posso usar o Arrow functions,  => 

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
