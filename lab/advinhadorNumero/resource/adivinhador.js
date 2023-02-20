const userNumber = prompt(`fala pai, Digite um numero ai de 0 a 10 que vou adivinhar: `);
const aleatorio = (Math.random() * 10)
const aleatorioSorteado = aleatorio.toFixed(0)
const indexHtml = document.getElementById("adivinhador");

console.log(aleatorioSorteado)

function verificador() {
    if (aleatorioSorteado === userNumber) {
        return `<span class="acerto">Acertou, foi exatamente o numero que estava pensando</span>`;
    }
    else {
        return `Errou, numero sorteado foi <span>${aleatorioSorteado}</span>`;
    }
}
indexHtml.innerHTML = `<p>${verificador()}</p>`;
function recarregarAPagina() {
    window.location.reload();
}

