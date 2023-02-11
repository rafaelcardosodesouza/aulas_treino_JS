const nome = "Rafael cardoso de souza"
const idade = 24;
const peso = 120;
let alturaEmM = 1.69;
let imc = peso / (alturaEmM * alturaEmM);
const nascimento = 2023 - idade;



//console.log(nome, "tem", idade, "anos, e pesa", peso); 
//console.log("tem", alturaEmM, "de altura e o seu IMC é de", imc, "o mesmo nasceu em:", nascimento );

// usando craze `` se ser feito dessa forma 
console.log(`${nome} tem ${idade} anos e pesa ${peso}`);

console.log(`tem ${alturaEmM} de altura e o seu IMC é de ${imc} o mesmo nasceu em ${nascimento}`);