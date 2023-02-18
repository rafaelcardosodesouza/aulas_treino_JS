const numero = Number(prompt(`Digite um numero`));
const numeroUsuarui = document.getElementById('numerUser');
const texto = document.getElementById('texto');

numeroUsuarui.innerHTML = numero;

texto.innerHTML = ``;
texto.innerHTML += `<p>A Raiz quadrada de <spna>${numero}</span> é <span>${Math.sqrt(numero)} </span></p>`
texto.innerHTML += `<p>O numero <span>${numero}</span> é inteiro? <span> ${Number.isInteger(numero)}</span></p>`
texto.innerHTML += `<p>Arredondando para baixo fica: <span>${Math.floor(numero)}</span></p>`
texto.innerHTML += `<p>Arredondando para baixo fica: <span>${Math.ceil(numero)}</span></p>`
texto.innerHTML += `<p>Com duas casas decimas fica: <span>${numero.toFixed(2)}</span></p>`