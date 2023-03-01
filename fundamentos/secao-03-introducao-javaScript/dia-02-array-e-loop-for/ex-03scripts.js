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
