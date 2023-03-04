// // Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.
// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function removeCliente(cliente) {
//   if (typeof cliente === 'string') {
//     let clienteEncontrado = false;
//     for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//       if (cliente === clientesTrybeBank[index]) {
//         clientesTrybeBank.splice(index, 1);
//         clienteEncontrado = true;
//         return 'Cliente excluída(o) com sucesso.';
//       }
//     }

//     if (clienteEncontrado === false) {
//       return 'Cliente não encontrado'
//     }
//   } else {
//     return 'O parâmetro passado deve ser do tipo "string"!';
//   }
// };
let clientesTrybeBank = ["Ada", "John", "Gus"];
function verifyClient(cliente) {
  if (typeof cliente !== "string") {
    return 'Entrada não é tipo "string"!';
  } else {
    return true;
  }
}
function indexClient(cliente) {
  let position = clientesTrybeBank.indexOf(cliente);
  if (position !== -1) {
    return position;
  }else{
    return 'Cliente não Econtrado'
  }
}
 function removeClient(cliente){
    let position = indexClient(cliente)
    if(position !== -1 && clientesTrybeBank[position] === cliente){
    clientesTrybeBank.splice(position,1)
        return 'Cliente removido com sucesso!'
    }else{
        return 'Cliente não encontrado'
    }
}

console.log(verifyClient("John"));
console.log(indexClient("John"));
console.log(removeClient('John'))
console.log(clientesTrybeBank);

