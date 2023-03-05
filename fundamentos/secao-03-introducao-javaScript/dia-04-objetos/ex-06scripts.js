//Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
//Adicione um novo livro favorito na chave livrosFavoritos, que é um array. 
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};
console.log('O livro favorito de ' + leitor.nome , leitor.sobrenome + 'se chama "' + leitor.livrosFavoritos[0].titulo + '"')

   const newBook = { 
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco'
   }
leitor.livrosFavoritos.push(newBook)
console.log(leitor)