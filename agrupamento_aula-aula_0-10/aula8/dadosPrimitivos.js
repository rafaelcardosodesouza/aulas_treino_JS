const nome = 'rafael';
const nome1 = "felipe";
const nome2 = `marcos`;
const num = 10;
const num1= 10.15
let nomeAluno;  //undefined -> não aponta para nenhum lugar na memoria
const sobreNomeAulun = null; //nulo -> nao tem nenhum valor na memoria

const aprovado = true; //valor boleano só tem dois valores, true or false; 

console.log(nome, nome1, nome2, num, num1, nomeAluno, aprovado);
console.log(typeof nome, '---nome');
console.log(typeof num, '---num');
console.log(nomeAluno, '---nomeAluno');
console.log(sobreNomeAulun, '---sobreNomeAulun');
console.log(aprovado, '---aprovado');

let a = 1;
const b = a;
console.log(a, b);

a = 5;
console.log(a, b);
