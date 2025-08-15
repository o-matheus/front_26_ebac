/* 
Tenho que fazer uma função que vai gerar números na sequência de Fibonacci, a quantidade de números que vão ser gerados vai depender da quantidade que o usuário pedir. 

Fibonacci sempre começa com 1 e o próximo vai ser a soma dos dois últimos. 

O que eu tenho que fazer:
1 - Função que gere os números fibonacci 
2 - loop de repetição para gerar esses números de acordo com o desejo do usuário 
3 - Devolver esse dados em um array.

Vou usar:
1 - push
2 - função pra somar os dois últimos index do array.
3 - loop
*/
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
let fibo: number[] = [1];
let qtdNumeros: string;

async function fibonacci() {
    console.log("Esse é um algoritmo que vai gerar números de acordo com a sequência fibonnaci! Não escreva de forma extensa")
    qtdNumeros = await rl.question('Digite a quantidade de números que você quer gerar: ')
    let numerosGerados = Number(qtdNumeros) - 1
    while (numerosGerados > 0) {
        const ultimo = fibo[fibo.length - 1]
        const penultimo = fibo[fibo.length - 2]
        let proximoNumero: number;
        if (fibo.length >= 2) {
            proximoNumero = ultimo + penultimo
        }

        else {
            proximoNumero = 1
        }
        fibo.push(proximoNumero);
        numerosGerados--;
    }
    console.log("Aqui estão os números gerados!")
    console.log(fibo);
    rl.close();
}

fibonacci();
