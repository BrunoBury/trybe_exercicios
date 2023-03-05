//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumber = 0;
for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] % 2 !== 0 ){
    oddNumber +=1;
  }
}
console.log(oddNumber)
if (oddNumber ===0){
    console.log('Nenhum valor ímpar encontrado');
}
//Utilizando for, descubra o menor valor contido no array e imprima-o.
let smallerNumber = numbers[0];
for(let index = 1; index < numbers.length; index += 1){
  if (numbers[index] < smallerNumber){
  smallerNumber = numbers[index];
  }
}
console.log(smallerNumber);