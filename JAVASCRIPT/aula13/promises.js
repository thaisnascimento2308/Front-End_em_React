const fs = require("fs");

// * 2 Promises (promessas)

//1- Pending: a promise foi iniciada, mais está pendente.
// const promessa = new Promise(() =>{}); //criando uma promessa
// console.log(promessa);

console.log("Antes da criação da promise...");
//2- Fullfiled: a promise foi concretizada com sucesso.
function lerArquivoPromise() {
    return new Promise((resolve, reject) =>{
    fs.readFile("/home/thais/Ada.tech/Front-End_em_React/JAVASCRIPT/aula13/arquivo.txt", (erro, conteudoDoArquivo) => {
        if (erro) {
            reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
            resolve(String(conteudoDoArquivo));
        }
    });
  }); //criando uma promessa
}

// //FOCO A PARTIR DAQUI....
// lerArquivoPromise()
// .then((RetornoDoResolveDaPromessa) => {
//     console.log("Deu certo:",RetornoDoResolveDaPromessa);
// })
// .catch((erro) => {
//     console.log("Deu ruim:", erro);
// })
// .finally(() => {
//     console.log("Isso aqui vai ser executado, independente do sucesso ou fracasso da promessa, no final dela.");
// });

// * 3. async/await

async function leituraDeDados() {
    console.log('Isso é executado ANTES da promise ser resolvida');

    try {
        const conteudo = await lerArquivoPromise();

        console.log(conteudo);
        console.log('Isso é executado DEPOIS da promise ser resolvida');
    } catch (err) {
        console.log(err);
        console.log('Isso é executado DEPOIS da promise com erro');
    } finally {
        console.log('Dentro do finally');
    }
}

leituraDeDados();