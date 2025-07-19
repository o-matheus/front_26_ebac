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
lista.push('José', false, 2);
console.log(lista);
