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
let isNan = isNaN(number) ? `Sim`:`Não`;

numberUserIndex.innerHTML = number;
raiz.innerHTML = `<p>a raz quadrada de <span>${number}</span> é <span>${Math.sqrt(number)}</span></p>`;
inteiro.innerHTML = `<p>é um numero inteiro?<span> ${inteiroV}</span></p>`;
nan.innerHTML = `<p> é um nan?<span> ${isNan}</span> </p>`;
cima.innerHTML = `<p> Arredondando para cima fica: <span>${Math.ceil(number)}</span></p>`;
baixo.innerHTML = `<p>Arredondando para baixo fica: <span>${Math.floor(number)}</span></p>`;
casa.innerHTML = `<p>E o com duas casas depois da virgula fica:<span> ${number.toFixed(2)}</span></p>`;