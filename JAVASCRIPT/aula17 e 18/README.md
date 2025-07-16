# Confirguração do TypeScript

1. Inicializar um Projeto Node.js
 1.1. `npm init -y`

2. Instalar o TypeScript
 2.1. Instalação global: `npm install -g typescript`
 2.2. Instalação local (dentro do projeto): `npm install typescript -D`

3. Utilizar o TypeScript instalado para transpilar o nosso código (converte nosso codigo TS para JS).
 3.1. `npx tsc typescript.ts` (nome do arquivo)
 3.2. `npx tsc typescript.ts --watch` atualizando no console sempre, sem ter q rodar o comando acima toda hora
 3.3. `npx tsc --init` cria tsconfig para deixar configurado
 3.4 `npx tsc`compilando