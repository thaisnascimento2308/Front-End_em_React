//--save-dev ou -D (npm(gerenciador de pacotes) install eslint -D) serve para o indicar que a biblioteca instalada nao vai para a produção
//(npx(inicializador de pacotes)

// const aula = 'JSON';

// const ferramenta = 'eslint';

// console.log(aula);

const fs = require('fs');

// 1- Lendo um arquivo JSON
fs.readFile('.eslintrc.json', (erro, dados) => {
  if (erro) {
    console.log('Erro:', erro);
  } else {
    //dados: Buffer com os dados do arquivo JSON
    const dadosObjetos = JSON.parse(dados); //Convertendo o Buffer em um objeto do JavaScript
    console.log(dadosObjetos.rules);
  }
});

// 2- Convertendo JSON, em formato de string, para um objeto

const jsonString = '{"nome": "Thais"}';
console.log(JSON.parse(jsonString));

// 3- Convertendo um objeto do JS, em um JSON (string).
console.clear();

const pessoa = {
  nome: 'Tony Stark',
  papel: 'Homem de Ferro',
};

console.log(JSON.stringify(pessoa));
