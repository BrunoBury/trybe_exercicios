//Adicione suas informações ao objeto student = {}, como nome, e-mail, idade, usando os métodos abordados no conteúdo.
let student = {}

let key = 'Nome';
let name ='Bruno';
let KeyAge = 'Age';
let age = 32;
let keyEMail = 'E-Mail'
let eMail = 'bruno_bury@hotmail.com'
 function addProperty(object, key, value){
    object[key] = value
 }
addProperty(student,key,name)
console.log(student)
addProperty(student,KeyAge,age)
console.log(student)
addProperty(student,keyEMail,eMail)
console.log(student)
