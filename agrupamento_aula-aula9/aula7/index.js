/*************************************************/
/******************algumas regras*****************/
//Nao podemos criar constantes com palavras reservadas
//Constantes precisam ter nome significativos
//não podemos começar o nome de uma constante com um numero 
//nao podem conter espaço ou traços
//ultilizamos camelCase
//Case-sensitive
//não podemos modificar o valor de uma constante
//NAO ULTILIZAR VAR, USAR CONST

/*************************************************/
// const nome = ('Rafael');
// console.log(nome);

const primeiroNumero = 20;
const segundoNumero = 5;
const terceiroNumero = 1;
const resultado = primeiroNumero * segundoNumero + terceiroNumero;
let resultadoMaisCinco = resultado;
resultadoMaisCinco = resultadoMaisCinco + 5;
console.log(resultadoMaisCinco);