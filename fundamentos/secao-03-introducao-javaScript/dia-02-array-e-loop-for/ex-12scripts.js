//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base.
let n = 5;
let asterisco = '*';
let linha = '';
for(let index = 0; index < n; index += 1){
    linha = linha + asterisco;
    console.log(linha)
}