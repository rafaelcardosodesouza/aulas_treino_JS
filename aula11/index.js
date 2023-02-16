// let num1 = 8.1144;
// // let num2 = Math.floor(num1) //arredonda para baixo
// // let num2= Math.ceil(num1) //arredonda para cima
// let num2 = Math.round(num1) // retorna o numero mais proximo
// console.log(num2)


// console.log(Math.max(1,2,3,4,90,50,452,24,-45)) //Math.max() procura o maior numero
// console.log(Math.min(1,2,3,4,-5,4,6,80,-80)) //Math.min() procura o menor numero





let escolha = 15;
function resultado(aleatorio) {
    if (escolha === aleatorio) {
        return 'acertou';
    } else {
        return 'errou';
    }
}
const aleatorio = Math.round(Math.random() * (100 - 1) +1);
console.log(resultado(aleatorio));

