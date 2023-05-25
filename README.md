# Dinner-express
Projeto de gestão de restaurantes online.

[Link da página](https://dinner-express-pedroheribeiro2021.vercel.app/)

Este projeto é uma aplicação fullstack web, desenvolvida por mim, para cadastro de restaurantes.

**Como executar o projeto:**

Para baixar o projeto, você precisará ter instalado em sua máquina as seguintes ferramentas: Git, Node.js e Yarn para gerenciar pacotes. Além disso, é bom ter um editor para trabalhar com o um editor de texto como VSCode.

1 - Clone o repositório para sua máquina local.
2 - No terminal, navegue até a pasta "frontend" do projeto.
3 - Execute o comando yarn install para instalar as dependências e repita o mesmo na pasta "backend".
4 - Crie um arquivo .env na raiz da pasta "backend" e configure as variáveis de ambiente com a URL para acesso ao banco de dados.
5 - Crie um banco de dados para o projeto.
6 - Execute o comando: "yarn typeorm migration:generate src/migrations/(NOME-DA-MIGRATION) -d src/data-source.ts" para criar o arquivo de migração para o banco de dados.
7 - Execute o comando: "yarn typeorm migration:run -d src/data-source.ts" para rodar as migração e persistir no banco de dados.
7 - Acesse a aplicação em seu navegador em http://localhost:3000.
