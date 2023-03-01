//Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n... 
let n = 5;
let asterisco = '*';
let linha = '';
for(let index = 0; index < n; index += 1){
    linha = linha + asterisco;
    console.log(index, linha)
    
}
for(let index = 0; index < n; index += 1){
    console.log(index ,linha)
}
