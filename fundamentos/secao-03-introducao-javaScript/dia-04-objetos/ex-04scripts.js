// Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:
// Bem-vinda, Margarida
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
console.log("Bem-vinda, " + info.personagem);
// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor]
info["recorrente"] = "sim";
console.log(info)
// Faça um for/in que mostre todas as chaves do objeto.
for (let key in info) {
  console.log(key)
}
// Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto.
for (let key in info) {
  console.log(info[key]);
}
