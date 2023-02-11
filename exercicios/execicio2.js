// o valor de A tem que ser o valor de B  o valor de B tem que ser o Valor de C e o valor de C tem que ser o valor de A

let varA = 'A';
let varB = 'B';
let varC = 'C';

/* ****minha solução****
const varAa = varA;

varA = varB;
varB = varC;
varC = varAa;

*/
[varA, varB, varC] = [varB, varC, varA]; // solução mais moderna

console.log(varA, varB, varC);