/* Ex. 1: Declare variáveis com tipos explícitos:
nome (string)

idade (number)

ativo (boolean)
*/
// Para criar uma variável com o tipo específico, mas sem um valor determinado usar o let.
// Toda vida que usarmos o const ele tem que ter um valor atribuido. 
let nome: string;
let idade1: number;
let ativo: boolean;

/* 
Ex. 2: Crie um array chamado cursos que só aceita strings. Tente inserir um número e veja o erro.
*/

let cursos: string[] = [];
cursos.push("historia")

/* 
Ex. 3: Crie uma função somar que receba dois números e retorne o resultado. Declare os tipos dos parâmetros e do retorno.
*/
const somar = (a: number, b: number): number => a + b;

/* 
Ex. 4: Crie duas variáveis: uma com tipagem implícita e outra com tipagem explícita. Compare os comportamentos.
*/
let carro = "Ford Ka"
let carro2: string = "Volksvagen Gol"


