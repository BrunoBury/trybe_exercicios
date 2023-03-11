// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
function romanToDecimal(numRoman)
let romanNumbers = {
    'I': 1,
  
    'V': 5,
  
    'X': 10,
  
    'L': 50,
  
    'C': 100,
  
    'D': 500,
  
    'M': 1000,  
  
  };
let result = 0;
for (let index = 0; index < numRoman.length; index +=1) {}