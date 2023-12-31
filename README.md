## Trabalho Final de Programação Web

## Status

Aceito.

## Contexto

Durante o desenvolvimento, primeiramente era para ser um projeto puramente em React, E ExpressJS. Mas pouco tempo depois, novas ideias sobre Vite, e a adição de novas ferramentas que garantem velocidade e segurança (sequelize, e axios), foram implementadas no projeto durante um perio ainda juvenil. A implementação de uma ferramenta de testes unitários foi concedida bem depois durante o final do projeto, visando que ela não impactaria tanto no desenvolvimento geral.

## Decisão

Para o front-end, foi utilizado a ferramenta de desenvolvimento reativo de páginas Vite com React. O motivo disto é que o React é uma ferramenta que permite que a página se torne ativa sem necessitar recarregar-la, e o Vite é uma ferramenta que permite a comunicação de certos conceitos do servidor junto com o React mais otimizado, assim como permitir que outras ferramentas (exemplo: ESLint e Babel) se comuniquem.

Para o back-end, foi utilizado a ferramenta de desenvolvimento de servidores ExpressJS. O motivo disto é que o ExpressJS, em compensasão com outras ferramentas também utilizadas para o back-end, é mais dinânimco e não é necessário a utilização extensiva e complexa de modelos para o banco de dados para um projeto pequeno. Porém, é mais inseguro e menos profissional do que as outras ferramentas. Também foi utilizado o sequelize para fazer bancos de dados, sendo ele muito mais seguro do que inserir manualmente os verbos SQL ao banco de dados. 

## Consequências

Para o front-end, a convêniencia de usar o Vite vem com o custo da dificuldade de configurar testes unitários com o Jest. Que acabou causando diversas inconveniencias durante o desenvolvimento. Outro problema era relacionado ao Axios, que necessitava da inserção de um objeto "data" dentro do json para que os dados possam ser mandados aos endpoints do back-end. Isso acarretou em diversos problemas relacionados ao Swagger, que não identificava o objeto "data", ocorrendo problemas de comunicação da API.