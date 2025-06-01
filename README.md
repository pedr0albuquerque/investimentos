# Projeto de Investimentos

# O que é

Projeto de aplicação web que realiza o gerenciamento de investimentos utilizando Node.js no back-end, MySQL 8.0 como banco de dados e um front-end com HTML, CSS e JavaScript (Front end no [repositório](https://github.com/pedr0albuquerque/investimentos-front-end)). O Express gerencia as rotas e requisições no back-end.

---

## 🚀 Funcionalidades

- Criar novo investimento
- Listar todos os investimentos
- Atualizar dados de um investimento existente
- Remover um investimento

---

## 🧰 Tecnologias utilizadas

- Node.js (22.15.0)
- Express.js
- MySQL 8.0
- Cors
- Sequelize

# Antes de executar

- Instale o mySQL e crie o banco de dados com a seguinte tabela

---

create database gf;
use gf;

create table investimentos(
	id_inv int not null primary key auto_increment,
    name_inv varchar(30) not null,
    type_inv varchar(15) not null,
    value_inv decimal(10,2) not null,
    date_inv date not null
);

--- 

- Acesse o projeto, na pasta "investimentos" execute o comando: npm install

- Configure o arquivo database.js e atualize com suas credenciais:

Ex:
    const sequelize = new Sequelize('nome_banco','user','senha',{
        host: 'localhost',
        dialect: 'mysql'
    })

# Como executar o projeto

- Ainda na pasta "investimentos" execute o comando: npm start