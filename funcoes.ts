// ao lado dos parametros, nos colocamos o tipo e depois dos parenteses dele colocamos tipo do retorno. 
// Estrutura (function(nomeParametro: tipo): tipo(retorno da função));
function calcularArea(base: number, altura: number): number {
    return base * altura
}

// Mesmo exemplo só que construindo com uma arrow function. 
const calcularArea2 = (base: number, altura: number): number => base * altura

// Tipificando o Rest, por padrão ele vai ser um any para fazer sua tipificação além de definir um tipo de matriz como um array. Quando a função não tem um return o tipo dela vai ser voyd.
function soma(...numeros: number[]) {
    console.log(numeros)
}

// Usando o type union para tipificar o retorno.
function teste1(): string | number {
    if (10 > 5) {
        return 'Dez maior que 5'
    } else {
        return 5
    }
}

// Casting - Convertendo tipos com TypeScript
namespace funcoes {
    let idade: any = 25;
    // console.log(idade);

    // para fazer a mudança temos que primiero passar para o unknou e depois para o string, quando o elemento não estiver seguindo os parametros corretos, mas aqui acho que iria der errrado se fossemos trabalhar com esse dado. 
    let nome: string = 35 as unknown as string;

    // Podemos usar também as outras conversões do JS - parseInt - parseFloat - .toString();
}

// Tipos customizados

// type -> palavra reservada para definir o tipo - nome do tipo customizado(Uppercase) = valor

// O ponto de interrogação do lado da propriedade serve para sinalizar que ela vai ser opcional.
type Aluno = {
    nome: string,
    curso?: string[],
    idade: number;
}

const alunos: Aluno[]= [
    {
        nome: "Matheus",
        curso: ["Desenvolvedor Fullstack - Java"],
        idade: 27,
    },
    {
        nome: "Lucas",
        curso: ["Designer Gráfico", "Desenvolvedor Frontend"],
        idade: 17,
    }
]

const novoAluno: Aluno = {
    nome: "José",
    idade: 21
}

function exibeAluno(aluno: Aluno) {
    console.log(aluno.nome)
}

exibeAluno(novoAluno);

