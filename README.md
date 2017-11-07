# desafio-entrevista-emprego
### Entrevista de Emprego

A partir do envio deste email começa a contar seu prazo de resolução. 
É importante que você nos responda o email com o teste resolvido em no máximo 3 horas. Caso não tenha conseguido resolver todo o teste, deve enviar o que conseguiu produzir.

1 - Criar projeto utilizando NPM;

2 - Armazenar dados de api existente:
  * 2.1 - Realizar requisição a API de postagens em JSON seguinte: https://jsonplaceholder.typicode.com/posts
  * 2.2 - Armazenar postagens em MongoDB, utilizando módulo Mongoose (atributo "userId" pode ser ignorado)

3 - Capturar dados:
  * 3.1 - Realizar requisição a página http://www.ifpe.edu.br/noticias;
  * 3.2 - Capturar notícias da página utilizando Cheerio convertendo para formato de postagens e armazenar como no item 2.2.

4 - CRUD postagens utilizando Express:
  * 4.1 - Fornecer listagem das postagens na url: http://127.0.0.1:8000/posts via método GET;
  * 4.2 - Cadastrar novas postagens via url: http://127.0.0.1:8000/posts via método POST;
  * 4.3 - Visualizar uma postagem via url: http://127.0.0.1:8000/posts/<id-da-postagem> via método GET;
  * 4.4 - Atualizar uma postagem via url: http://127.0.0.1:8000/posts/<id-da-postagem> via método PUT;

Documentação:
API de exemplo https://jsonplaceholder.typicode.com/

Requisições HTTP https://www.npmjs.com/package/request

Capturar dados de html https://www.npmjs.com/package/cheerio

Modelo de dados para MongoDB https://www.npmjs.com/package/mongoose

Framework web https://www.npmjs.com/package/express‌

