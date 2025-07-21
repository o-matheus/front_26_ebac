# Módulo 26 - Typescript

## Menu 
[Aula 1 - Conheça o TypreScript ](#aula-1---conheça-o-typescript)  
[Aula 2 - Análise os tipos básicos](#aula-2---análise-os-tipos-básicos)    
[Aula 3 - Aplique tipagens em funções ](#aula-3---aplique-tipagens-em-funções)    
[Aula 4 - Crie casting ](#aula-4---crie-casting)    
[Aula 5 - Crie tipos customizados ](#aula-5---crie-tipos-customizados)    
[Aula 6 - Explore a orientação a objetos ](#aula-6---explore-a-orientação-a-objetos)    
[Aula 7 - Conheça interface ](#aula-7---conheça-interface)    
[Aula 8 - Integre Typescript com o DOM ](#aula-8---integre-typescript-com-o-dom)    
[Tarefa ](#tarefa)    

## Aula 1 - Conheça o TypeScript

### Objetivos
* Compreender os fundamentos do TypeScript;
* Familiarizar-se com a tipagem estática;
* Conhecer os benefícios do TypeScript na prática.

### Pontos importantes
O Javascript é uma linguagem que não é tipada e isso pode ocasionar em diversos problemas de execução no código quando preenchemos com uma inofrmação que não está nos parametros requisitados. 
O Typescript vai resolver essa situação adicionando a tipagem ao JS.

`npm i --global typescript` -> Como instalar. 
`npx tsc --init` -> Iniciar o Typescript.
`npx tsc` -> Compila de TSC para JS. 
`npx tsc --watch` -> Acompanha as compilações em tempo real.
* (Não precisa do npx se estiver instalado de forma global)

Quando vamos no tsconfig podemos alterar o parametro `outDir` para definir a saida padrão da compilação.

## Aula 2 - Análise os tipos básicos

### Objetivos
* compreender os tipos básicos do TypeScript;
* dominar a declaração de tipos personalizados;
* explorar o uso de tipos "any".

### Pontos importantes
Quando vamos trabalhando com TSC podemos já definindo a tipagem quando criamos a varíavel a estrutura vai ser `variavel: tipo = valor` exemplo: `let idade: number = 26`. Diferente do JS o TSC não aceita que um array tenha vários tipos misturados.

Na questão dos arrays a estrutura vai ser bem parecida para fazer a tipagem como as variáveis exemplos dessa estruturação são: 
* variável: tipo[array] = [...valor]
`const colegas: string[] = ['Lucas', 'Fernanda', 'Matheus']`

* variável: Array<tipo> = [...valor]
`const stacks: Array<string> = ['html', 'css', 'javascript']`

Para criar uma estrutura semelhante ao array mas que aceite multiplos tipos de dados nós trabalhamos com tuplas e é possível fazer com que uma variável do TSC aceite qualquer tipo usando o `any` e caso queira que uma variável aceite mais de um tipo utilizamos o type union com o `|`.

É possível fazer o encapsulamento de informações utilizando o `Readonly` para que o valor registrado não seja alterado.

## Aula 3 - Aplique tipagens em funções

### Objetivos 
* Diferenciar tipagem implícita e explícita;
* declarar explicitamente os tipos de argumentos e retorno em funções personalizadas, tornando o código mais legível e seguro;
* lidar com diferentes tipos de argumentos e retorno em funções.

### Pontos importantes
Não necessariamente temos que fazer uma tipagem na variável, se já fizermos uma entrada com um tipo especifico ela vai fazer uma tipagem implicita.

A tipagem das funções segue o padrão da tipagem dos elementos da tupla e depois do parametro se fizer uma tipagem vai ser a tipagem do retorno da função, caso a função não tenha retorno o tipo padrão é voyd.

## Aula 4 - Crie casting

### Objetivos
* dominar as técnicas de conversão de tipos no TypeScrip;
* evitar erros de conversão de tipos e problemas de segurança.

### Pontos importantes 
Mesmo que esteja em um arquivo diferente não é possível repetir o nome de constantes ou funções no TypeScript. Para que seja possível fazer isso temos que usar o `namespace nomeArquivo {}`. Com o casting vamos informar ao TypeScript para tratar a varíavel de uma forma especifica, como número, string, boleano... mas ela apesar de estar com essa indicação vai dar um erro se não estiver seguindo os parametros corretos.

Unknown -> Vai fazer com que a pessoa que está trabalhando com código tenha que tipificar corretamente a variável para que ela seja utilziada corretamente.

### Tenho que estudar
* Namespace e modulos.

## Aula 5 - Crie tipos customizados

### Objetivos
* compreender os conceitos de tipos customizados;
* criar e utilizar tipos customizados;
* aplicar tipos customizados.

### Pontos Importantes
Além dos tipos padrões que nós trabalhamos - string, number, boleano - podemos também criar tipos custozmizados, que são um conjunto de tipos para uma variável especifica que estamos trabalhando usamos a palavra reservada `type` 

## Aula 6 - Explore a orientação a objetos

### Objetivos
* compreender os conceitos fundamentais de orientação a objetos;
* aplicar modificadores de acesso e encapsulamento;
* utilizar herança e polimorfismo.

### Pontos Importantes
Quando fazemos a criação de objetos não podemos fazer como no JS em deixar os parametros da função construtora não tipificados. No Typescript temos que sinalizar e tipicar a existência do atributo antes da função construtora, com isso vamos ter duas formas de organizar as classes, uma em que utilizamos essa estrutura:
```ts
class Pessoas {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }
}
```
E a outra que utilizamos essa.
```ts
class Pessoas1 {
    constructor(public nome: string) {}
}
```
Depois de algumas conversas descobri que as duas formas são utilizadas e que as duas tem suas próprias situações de uso, onde a primeira pode servir quando queremos usar campos opcionais e fazer o tratamento de dados, quando o dado que recebemos do parametro é diferente do atributo que temos na classe. Quando classe tem muitos parametros é uma saída utilziar tipos e objetos para deixar menor a escrita.

Na segunda forma apresetnada confiamos ao TypeScript a declaração dos atributos e parametros na hora da compilação.

Nas classes podemos definir o encapsulamento dos atributos e classes se eles são públicos, que já vem por padrão, protegidos ou privados. 

Aprendemos também sobre getters e setters que são formas de fazer alterações nos valores do atributo da classe sem necessariamente chamar os metódos, em relação ao get é só colocar `instancia.get(nome do get)` e o setter vai funcionar como se fosse um atributo, em vez de chamar a função seria `instancia.set = valor`

## Aula 7 - Conheça Interface

### Objetivos
* compreender o conceito de interfaces e seu uso na programação;
* implementar interfaces em classes;
* entender a flexibilidade das interfaces.

### Pontos Importantes
Uma interface quando estamos trabalhando com o progamação orientada a objetos é um conjunto de regras que essa classe em específico vai seguir, em relação aos metódos e atributos.
Uma classe pode ter diversas interfaces `implements`, porém só pode herdar informações de uma classe `extends`. 
Quando criamos uma interface nós não escrevemos a função, somente tipificamos seus parametros e retorno. É importante fazer uma interface mais reduzida para que as classes tenham que ter funções que elas não vão utilziar. 
As interfaces também podem herdar de outras interfaces suas caracteristicas por meio do `extends`
As interfaces também podem ser utilziadas como tipos customizados.


## Aula 8 - Integre TypeScript com o DOM

### Objetivos
* compreender a integração do TypeScript com o DOM;
* aplicar tipos e interfaces para elementos do DOM;
* documentar o código TypeScript com comentários e dicas.

### Pontos importantes
O TypeScript ele é bastante utilziado com o Frontend, trabalhando com alguns frameworks como angular, view, react.


## Tarefa
A entrega deste exercício consiste em:

• Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

• No repositório do curso crie uma branch chamada exercicio_ts e armaze o código TS escrito nesta branch, nos envie o link através da plataforma.

### Pontos importantes
O exércicio foi bem tranquilo, não tem muito o que comentar, foi só criar a branch, o arquivo e as duas funções.