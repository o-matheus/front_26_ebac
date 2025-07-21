// O tipo dessa constante vai ser um elemento HTML ou um espaço vazio, caso não tenha nenhum valor.
const campoNome = document.getElementById('nome');

// O tipo dessa constante vai ser um array com vários elementos HTML.
const formulario = document.getElementsByTagName('form');

const botaoEnviar = document.getElementById('btn-enviar');

// O `?` serve como uma verificação, vai executar se existir esse retorno da constante.
// Assim como os parametros, atributos e metodos os eventos das funções também vão ter seus tipos, se apertamos f12 no tipo do evento que adicionamos a função podemos ver quais são as regras da interface. 
botaoEnviar?.addEventListener('click', (e: MouseEvent) => {

} )