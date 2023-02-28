//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).Se a peça passada for inválida, o código deve retornar uma mensagem de erro.Exemplo: bishop (bispo) -> diagonals (diagonais)
let pecaXadrez = 'REI';

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
        console.log('rei: pode mover-se para qualquer direção,porém apenas uma casa por vez; ')
        break;
    case 'dama':
        console.log('dama: pode mover-se em qualquer direção(vertical,horizontal e diagonal), quantas casas quiser, desde que estejam livres')
        break;
    case 'torre':
        console.log('torre: move-se em linha reta, tanto na vertical quanto na horizontal,quantas casas quiser')
        break;
    case 'bispo':
        console.log('bispo: move-se na diagonal quantas casas quiser.')
        break;
    case 'cavalo':
        console.log('cavalo: É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. . ')
        break;
    case 'peão':
        console.log('peão: move-se sempre uma casa para frente.exceto no primeiro movimento, quando pode mover-se duas casas')
        
        break;
    default:
        console.log('Erro,peça inválida!');
}