
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


function soma(x, y){
    let resultado = x + y;  //não tem como acessar o valor dessa variavel fora do campo function
    return resultado;
}

console.log(soma(5, 20));
