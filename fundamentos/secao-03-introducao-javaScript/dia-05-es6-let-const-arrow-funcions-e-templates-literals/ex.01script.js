  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
    pessoa.nome ='Luna';
    pessoa.idade = 19;
// Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);
//   Altere a expressão if/else utilizando ternary operator.
// let speed = 90;
//   const speedCar = (speed) => {
//     if (speed >= 120) {
//       return `Você ultrapassou o limite de velocidade`;
//     } else {
//       return `Você está na velocidade permitida`;
//     }
//   };
//   console.log(speedCar(speed));
let speed = 90;
const speedCar = (speed) => (
    speed >=  120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
);
console.log(speedCar(speed));