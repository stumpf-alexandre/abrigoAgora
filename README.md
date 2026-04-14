# 🚀 Abrigo Agora

## 📌 Sobre o Projeto

### - Problema escolhido:

Durante enchentes, a comunicação entre abrigos e desabrigados é ineficiente. Enquanto locais conhecidos (como escolas centrais) ficam superlotados rapidamente, abrigos periféricos ou menores permanecem com vagas ociosas. Isso gera deslocamentos perigosos, cansaço extremo e exposição desnecessária de famílias, pois não há uma base de dados centralizada e atualizada em tempo real.

### - Ideia do projeto:

A ideia é criar um ecossistema de informação dinâmica. O foco não é apenas listar onde estão os abrigos, mas sim onde há vagas agora e qual o genero de pessoa, crianças desacompanhadas, pessoas com deficiencia e pet-friendly caso o abrigo aceite.

### - Solução proposta:

O objetivo é transformar a incerteza em uma rota segura, garantindo que o desabrigado só se desloque para um local que comprovadamente tenha espaço. A solução atua em duas frentes: alimentação de dados (pelos abrigos) e consumo de informação (pelas famílias).

### - Estrutura da solução:

1. Uma interface simplificada para que os voluntários nos abrigos em um click inclua ou exclua um desabrigado.
2. Uma lista de abrigos com seus endereços e o que é aceito no mesmo.
3. Um indicador de quais abrigos possuem vagas e quais estão com lotação máxima.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- SQLite3
- Nodemon
- Postman

---

## 📦 Instalação

`npm install`

---

## ▶️ Como Executar

```bash
npm run dev

```

`http://localhost:3000`

---

## 🗄️ Banco de Dados

O Banco de Dados é criado automaticamente ao iniciar o projeto.

```
database.db
```

---

## 🧾 Tabela

|Campo                    |Descrição                                             |
|-------------------------|------------------------------------------------------|
|id                       |Identificador único                                   |
|nome_abrigo              |Nome do abrigo                                        |
|endereco_abrigo          |Endereço do abrigo                                    |
|vagas_abrigo             |Quantidade de vagas do abrigo                         |
|qtd_desabrigados         |Quantidade de pessoas que já estão no abrigo          |
|genero                   |Qual o tipo de pessoa o abrigo aceita                 |
|pet-friendly             |Se o abrigo acolhe os animais dos desabrigados        |

---

## 🔗 Endpoints

### Rota Inicial

```http
GET /
```
Retorna uma página HTML simples com informações da API.


### Rota para listar todos os abrigos

```http
GET /abrigos
```
Retorna todos os registros do banco de dados


### Rota para buscar um abrigo específico (ID)

```http
GET /abrigos/:id
```
Ex.: /abrigos/1

Retorna um abrigo específico.


### Rota para criar um novo abrigo

```http
POST /abrigos
```

#### - Body (JSON)

```json
  {
    
  }
```


### Rota para atualizar um abrigo

```json
PUT /abrigos/:id
```

#### - Body (JSON)

```json
  {
    
  }
```

### Rota para deletar um abrigo

```http
DELETE /abrigos/:id
```
---

## 🔐 Segurança

A API utiliza `?` nas queries SQL:

```sql
WHERE id = ?
```

Isso evita o SQL Injection

---

## 📚 Conceitos

- CRUD (Create, Read, Update e Delete)
- Rotas com Express
- Métodos/Verbos HTTP

---

## 👩‍💻 Projeto Educacional

Este projeto foi desenvolvido para fins de aprendizado em back-end com Node.js e front-end com React.js, por Alexandre. Segue o link do deploy feito para esta API **[Abrigo Agora]()**.

---

## Instalando Node, Express, SQLite, Nodemon:
* No terminal do gitbash, dentro da pasta raiz do projeto,  para instalar o node-js, digite `npm init -y`. Transforma uma pasta comum em um projeto node. (Cria uma pasta package.json com suas dependencias).
* Para instalar o express digite `npm install express`. (Cria as pastas package-lock.js, node_modules e atualiza o package.js)
* Para instalar o nodemon `npm install nodemon --save-dev`, va até a pasta package.json, no script vai tar escrito:
* Instalando o sqLite `npm install sqlite3 sqlite`
* Criando um arquivo digite `touch server.js`, de um espaço e digite `.gitignore` e  de um espaço e digite `database.js`. (cria as pastas server.js, .gitignore e database)
* Comando para testar o servidor vai trocar de `node server.js"` para `npm run dev`, para fazer o nodemon ficar escutando o servidor caso haja alguma alteração
* Va até a pasta package.json, no script vai tar escrito:
  ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon database.js"
  },
  ```
  -> escreva no script junto com test:
  ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
  ```
  * Para instalar o cors digite `npm install cors`. Para instalar nossa segurança de acesso.
  * Para instalar o sqlite versão instavel para o render entender `npm install sqlite3@5.1.6`. É uma versão equilibrada.
  * Para remover as pastas node_modules e package-lock.json com o comando `rm -rf node_modules package-lock.json`.
  * Intalar novamente as pastas node_modules e package-lock.json com configurações novas `npm install`.
  * Na pasta package.json, vai estar assim:
  ```
  {
    "name": "zelacidade",
    "version": "1.0.0",
    "description": "![](./img/1.jpg)",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "nodemon server.js"
    },
    ...
  }

  ```
  Para ficar assim:
  ```
  {
    "name": "zelacidade",
    "version": "1.0.0",
    "description": "![](./img/1.jpg)",
    "main": "index.js",
    "engines": {
      "node": "18.x"
    },
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "nodemon server.js"
    },
    ...
  }
  ```
  O node 18 é uma versão focada em estabilidade.
  * Criando o start no script:
  ```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
  ```
  Temos que acrecentar:
  ```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js",
    "start": "node server.js",
    "postinstall": "npm rebuild sqlite3"
  },
  ```
  O comando start que o render procura para rodar as API.
  O comando postinstall recompila o sqlite3 no ambiente Render.
  * [Clique aqui para acessar o RENDER](https://render.com/)