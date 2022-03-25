<h1>API REST Transportadora</h1>

<img src="https://cargox.com.br/wp-content/uploads/2018/03/Um-novo-fator-que-est%C3%A1-mudando-o-modelo-tradicional-de-transportadoras.jpg" width="1000px" height="400px">

Projeto final de módulo (IV) do curso de Web Dev Full Stack da Resilia Educação.

Projeto realizado utilizando o Node.js com framework Express.

##

<h2>Objetivo</h2>

Projeto criado com o objetivo a criação de uma API Rest de uma transportadora utilizando as operações CRUD.

##

<h2>Pré-requisitos</h2>

Node.js v.16.14.0<br>
NPM v.8.3.1

##

<h2>Pacotes Utilizados</h2>

Express: v4.17.3<br>
Nodemon: v2.0.15<br>
SQLite: v5.0.2<br>
Jest: v27.5.1<br>
Supertest: v6.2.2<br>
CORS: v2.8.5

<h2>Instalação</h2>

Clone do repositório


Instalando Pacotes<br>
npm install<br>
npm install sqlite3<br>

Criando e populando o Banco de Dados<br>
npm run database<br>

Iniciando o servidor<br>
npm start

## Rotas
GET/pacote/<br>
Retorna todos os pacotes<br>
Resposta esperada

	"pacotes": [
		{
			"ID": 1,
			"CLIENTE_ID": 1,
			"FRETE": "R$ 23.99",
			"PESO": "9KG",
			"LARGURA": "30cm",
			"ALTURA": "30cm",
			"COMPRIMENTO": "30cm"},
      ]
      {...}
		}
    
GET/pacote/id/{id}<br>
Retorna somente um pacote<br>
Resposta esperada

	{
			"ID": 1,
			"CLIENTE_ID": 1,
			"FRETE": "R$ 23.99",
			"PESO": "9KG",
			"LARGURA": "30cm",
			"ALTURA": "30cm",
			"COMPRIMENTO": "30cm"},
      ]
      }
      
POST/pacote/<br>
Insere um pacote<br>
Resposta esperada

	{
	"mensagem": "Pacote 2 inserido com sucesso!",
	"pacote": {
		"id": 2,
		"cliente_id": 2,
		"frete": "R$ 22.25",
		"peso": "0.5KG",
		"largura": "100cm",
		"altura": "100cm",
		"comprimento": "100cm"
	},
	"erro": false}

      
      
 DELETE/pacote/id/{id}<br>
 Deleta um pacote<br>
 Resposta esperada
 
 
 	{
	"pacote": "Pacote de id 1 deletado com sucesso!",
	"erro": false}
 
 PUT/pacote/id/{id}<br>
 Atualiza um pacote<br>
 Resposta esperada
 
 	{
	"mensagem": "Pacote de id 2 atualizado com sucesso!",
	"pacote": {
		"id": 2,
		"cliente_id": 2,
		"frete": "R$ 22.25",
		"peso": "0.5KG",
		"largura": "100cm",
		"altura": "100cm",
		"comprimento": "100cm"
	},
	"erro": false}
      
  <h2>Desenvolvido por</h2>
  Bernardo Moura
  
      
      
		

