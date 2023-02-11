//               0123456789 
let umaString = `O rato roubou um quiejo.`;
console.log(umaString.replace(/quiejo/g, `queijo`)); // substitui a palavra
console.log(umaString.length); // soma o tamanho do total do indice
console.log(umaString.slice(2, 6)); // retonar os os elementos que estão entre os indice selecionado 
console.log(umaString.slice(-7, -1)); // mesma coisa que o exemplo de cima, so que começa no final 
console.log(umaString.split(' ', 3)) // aqui divide a string com o caractere que vc inserir entre ('') posso definir quantas vezes que possa ocorrer usando('' , VALOR) no exemplo selecionei só para aparecer 3 valores
console.log(umaString.toUpperCase()); //deixa tudo maiusculo
console.log(umaString.toLowerCase()); // deixa tudo minusculo