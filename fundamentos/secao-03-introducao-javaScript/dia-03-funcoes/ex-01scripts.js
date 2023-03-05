// Desenvolva cada exercício a seguir com o uso de funções.
//Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:
//Adicione um valor ao saldo.
//Subtraia um valor do saldo.
//Multiplique o valor do saldo por uma taxa.
//Divida o valor do saldo.
let saldo = 500;
function adicionaValorSaldo(valor){
    return saldo + valor;
};
function subtraiValorSaldo(valor){
    return saldo - valor;
};
function multiplicaValorSaldo(valor){
    return saldo * valor;
};
function divideValorSaldo(valor){
    return saldo / valor;
}

console.log(adicionaValorSaldo(100));
console.log(subtraiValorSaldo(100));
console.log(multiplicaValorSaldo(1));
console.log(divideValorSaldo(100));