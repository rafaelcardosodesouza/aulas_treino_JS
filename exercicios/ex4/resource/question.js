const number = Number(prompt(`Digite um numero: `));
const numberUserIndex = document.getElementById(`numerUser`);
const textoArea = document.getElementById(`texto`);
const raiz = document.getElementById(`raiz`);
const inteiro = document.getElementById(`inteiro`);
const nan = document.getElementById(`nan`);
const cima = document.getElementById(`cima`);
const baixo = document.getElementById(`baixo`);
const casa = document.getElementById(`casa`);


let inteiroV = number % 1 === 0 ? `Sim` : `Não`;

numberUserIndex.innerHTML = number;
raiz.innerHTML = `<p>a raiz quadrada de ${number} é ${Math.sqrt(number)}</p>`
inteiro.innerHTML = `<p>é um numero inteiro? ${inteiroV}</p>`

