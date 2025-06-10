const fs = require("fs");

// * 1. Callbacks(função de retorno)
;
console.log('ANTES da função de ler o arquivo...')

//Função assíncrona (ler um arquivo leva um tempo)
fs.readFile("/home/thais/Ada.tech/Front-End_em_React/JAVASCRIPT/aula13/arquivo.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
    } else {
        console.log(String(conteudoDoArquivo));
    }
});

console.log('DEPOIS da função de ler o arquivo...');

console.clear();

//Exemplo * 2: setTimeout (função que cria um timer)

console.log('ANTES do setTimeout...') // Executa primeiro

setTimeout(() => {
    console.log('Isso aqui vai ser excecutado após 2 segundos!'); //EXECUÇÃO APÓS 2 SEGUNDOS // Executa terceiro
}, 2 * 1000);

console.log('DEPOIS do setTimeout...') // Executa segundo
