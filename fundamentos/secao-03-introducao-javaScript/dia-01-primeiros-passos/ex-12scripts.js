//Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 98; 
if (nota >= 90 && nota <=100){
    console.log('Nota A');
}
else if(nota >=80 && nota <90){
    console.log('Nota B');
}
else if(nota >= 70 && nota <80){
    console.log('Nota C');
}
else if (nota >= 60 && nota <70){
    console.log('Nota D');
}
else if (nota >=50 && nota <60){
    console.log('Nota E');
}
else if(nota <50 && nota >0){
    console.log('Nota F');
}
else if(nota<0 || nota >100){
    console.log('Erro, verifique a  %');
}