//🚀 Lidando com arrays
//Considere esse array para realizar os próximos exercícios.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Percorra o array imprimindo todos os valores contidos nele com a função console.log().
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);    
}
//Some todos os valores contidos no array e imprima o resultado.
let sum = 0;
for (let index = 0; index < numbers.length; index += 1){
  sum += numbers[index];
}
console.log(sum);
//Calcule e imprima a média aritmética dos valores contidos no array.
let average = sum/numbers.length;
console.log(average);
//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
if (average > 20){
  console.log('Valor maior que 20');
}
else{
  console.log('Valor menor ou igual a 20');
}