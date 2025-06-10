const fs = require("fs");

// * 2 Promises (promessas)

//1- Pending: a promise foi iniciada, mais está pendente.
// const promessa = new Promise(() =>{}); //criando uma promessa
// console.log(promessa);

console.log("Antes da criação da promise...");
//2- Fullfiled: a promise foi concretizada com sucesso.
const promessa1 = new Promise((resolve, reject) =>{
    fs.readFile("/home/thais/Ada.tech/Front-End_em_React/JAVASCRIPT/aula13/arquivo.txt", (erro, conteudoDoArquivo) => {
        if (erro) {
            reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
            resolve(String(conteudoDoArquivo));
        }
    });
}); //criando uma promessa

//FOCO A PARTIR DAQUI....
promessa1.then((RetornoDoResolveDaPromessa) => {
    console.log("Deu certo:",RetornoDoResolveDaPromessa);
});



//3- Rejected: a promise foi rejeitada, porque houve um erro.