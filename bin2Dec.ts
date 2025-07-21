/* 
O que eu tenho que fazer. 

1- Permitir que o usuário escreva um valor e ele seja usado posteriomente no código.
2- Procurar a função para converter de número binário para número decimal.
3- Converter o valor que o usuário digitou.
4- Mostrar no console o resultado final.


- Limitações
-> Não pode usar arrays para salvar os inputs do usuário.
-> Para fazer a conversão de binário para número decimal temos que usar somente uma função. 

- Solicitação
-> O usuário pode um binário de até 8 digitos.

- Solução
Input console.


Binário para Número inteiro
1- Binário em string
2- Transforma de string para array
3- Faz as contas de cada um dos números do número binário com algum metódo do array (reduce)
    3.1 - Transformar de string para número
4- Utiliza o Reduce para transformar ese array em um valor único


*/
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
async function bina () {
    let binario: string;
    binario = await rl.question('Digite um número binário: ');

    const binarioArray = binario.split("")

    const tamanhoBinario: number = binarioArray.length
    const resultado = binarioArray.reduce((acumulador, itemAtual, index) => {
        if (Number(itemAtual) > 0) {
            acumulador += 2 ** (tamanhoBinario - (index + 1))
        }
        return acumulador;
    }, 0)


    console.log(`A conversão do número binário que você digitou ${binario} é ${resultado} em números decimais`);
    rl.close();
}

bina();



