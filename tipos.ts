console.log("Matheus");

// Tipos Básicos Typescript

// estrutura (variável: tipo = value)

// tipo boleado - True ou false
let estaChovendo: boolean = false

// tipo númerico - Inteiro e Float
let idade: number = 27

let altura: number = 1.75

// tipo string
let nacionalidade: string = "brasileira";

// Estrutura array (variável: tipo[array] = [...valor])
const colegas: string[] = ['Lucas', 'Fernanda', 'Matheus']

// Estrutura array (variável: Array<tipo> = [...valor])
const stacks: Array<string> = ['html', 'css', 'javascript']

// Array somente leitura - Não vamos poder adicionar informações mas outras funções do array vão funcionar normalmente. 
const notas: ReadonlyArray<number> = [7, 3, 5, 8]

//Tuplas - Conseguem receber multiplos tipos como informação.
//Estrutura (variável: [nome: tipo...] = [value] )
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Matheus', true, 26,]

// Type union - Faz com que a variável aceite mais de um tipo.
// Estrutura (variável: tipo | tipo = valor) 
let idadeAna: number | string = 25;
idadeAna = '25 anos'

// Para fazer a variável aceitar qualquer tipo usamos o any - mas temos que ter cuidado se não fica igual ao JS e ai não tem sentido usar o TSC - Utilizada (geralmente) quando vamos interagir com o Backend e não sabemos o tipo de dado que ele vai enviar. 
let teste: any = "";



