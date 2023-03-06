// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando
// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.
let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  function addProperty(object,key,value){
  object[key] = value;
  }
  addProperty(lesson2, 'turno', 'noite');
// console.log(lesson2);

function listKeys(object){
   return  Object.keys(object)
}
// console.log(listKeys(lesson1))

function sizeOfObject(object){
    return Object.keys(object).length
}
// console.log(sizeOfObject(lesson1))
function objValue(object){
    return Object.values(object)
}
// console.log(objValue(lesson1))

const allLessons = Object.assign({},{lesson1, lesson2, lesson3})
// console.log(Object.keys(allLessons).length)

function allStudents(object){
    const keys = Object.keys(object)
    let sum = 0;
    for(let index = 0; index < keys.length ;index +=1){
        sum = object[keys[index]].numeroEstudantes + sum;         
    }
    console.log(sum)
    // lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes
}
    allStudents(allLessons)
    
