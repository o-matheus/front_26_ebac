"use strict";
console.log("Matheus");
// Tipos Básicos Typescript
// estrutura (variável: tipo = value)
// tipo boleado - True ou false
let estaChovendo = false;
// tipo númerico - Inteiro e Float
let idade = 27;
let altura = 1.75;
// tipo string
let nacionalidade = "brasileira";
// Estrutura array (variável: tipo[array] = [...valor])
const colegas = ['Lucas', 'Fernanda', 'Matheus'];
// Estrutura array (variável: Array<tipo> = [...valor])
const stacks = ['html', 'css', 'javascript'];
// Array somente leitura - Não vamos poder adicionar informações mas outras funções do array vão funcionar normalmente. 
const notas = [7, 3, 5, 8];
//Tuplas - Conseguem receber multiplos tipos como informação.
//Estrutura (variável: [nome: tipo...] = [value] )
const lista = ['Matheus', true, 26,];
// Type union - Faz com que a variável aceite mais de um tipo.
// Estrutura (variável: tipo | tipo = valor) 
let idadeAna = 25;
idadeAna = '25 anos';
// Para fazer a variável aceitar qualquer tipo usamos o any - mas temos que ter cuidado se não fica igual ao JS e ai não tem sentido usar o TSC - Utilizada (geralmente) quando vamos interagir com o Backend e não sabemos o tipo de dado que ele vai enviar. 
let teste = "";
